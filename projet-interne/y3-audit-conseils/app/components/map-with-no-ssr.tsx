"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import type { LatLngExpression, Icon } from "leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapWithNoSSRProps {
  center: LatLngExpression
  zoom: number
  markerPosition?: LatLngExpression
  popupText?: string
  height?: string
}

// Configuration de l'icône par défaut
const DefaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Configuration des types pour les props des composants
interface MapContainerProps {
  center: LatLngExpression
  zoom: number
  style: React.CSSProperties
  scrollWheelZoom: boolean
  children?: React.ReactNode
}

interface TileLayerProps {
  attribution: string
  url: string
}

interface MarkerProps {
  position: LatLngExpression
  children?: React.ReactNode
}

interface PopupProps {
  children: React.ReactNode
}

export default function MapWithNoSSR({ center, zoom, markerPosition, popupText, height = "100%" }: MapWithNoSSRProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Vérifier si on est côté client
    if (typeof window === "undefined") return

    // Vérifier si Leaflet est disponible
    if (typeof L === "undefined") {
      console.warn("Leaflet n'est pas disponible")
      setHasError(true)
      return
    }

    try {
      // Configuration de l'icône par défaut pour tous les marqueurs
      const markerIcon = DefaultIcon as Icon
      // @ts-ignore - Les types de Leaflet ne sont pas correctement résolus pour Marker.prototype.options
      if (L.Marker && L.Marker.prototype) {
        L.Marker.prototype.options.icon = markerIcon
      }
      setIsMounted(true)
    } catch (error) {
      console.error("Erreur lors de l'initialisation de la carte:", error)
      setHasError(true)
    }
  }, [])

  if (hasError) {
    return (
      <div className="bg-gray-100 border border-gray-300 rounded-lg flex flex-col items-center justify-center p-8 text-center" style={{ height }}>
        <p className="text-gray-700 font-medium mb-2">Carte non disponible</p>
        <p className="text-sm text-gray-600 mb-4">
          Votre navigateur ne supporte pas l'affichage des cartes interactives.
        </p>
        {popupText && (
          <div className="text-sm text-gray-700 bg-white p-3 rounded border">
            {popupText}
          </div>
        )}
      </div>
    )
  }

  if (!isMounted) {
    return (
      <div className="bg-gray-200 animate-pulse rounded-lg flex items-center justify-center" style={{ height }}>
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    )
  }

  const mapContainerProps: MapContainerProps = {
    center,
    zoom,
    style: { height: "100%", width: "100%" },
    scrollWheelZoom: false,
  }

  const tileLayerProps: TileLayerProps = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  }

  const renderMarker = () => {
    if (!markerPosition) return null

    const markerProps: MarkerProps = {
      position: markerPosition,
    }

    if (popupText) {
      const popupProps: PopupProps = {
        children: popupText,
      }
      return (
        <Marker {...markerProps}>
          <Popup {...popupProps} />
        </Marker>
      )
    }

    return <Marker {...markerProps} />
  }

  return (
    <div style={{ height, width: "100%" }}>
      <MapContainer {...mapContainerProps}>
        <TileLayer {...tileLayerProps} />
        {renderMarker()}
      </MapContainer>
    </div>
  )
}

// Composant wrapper avec gestion d'erreur
export function SafeMapWithNoSSR(props: MapWithNoSSRProps) {
  const [error, setError] = useState(false)

  useEffect(() => {
    // Vérifier les fonctionnalités requises pour Leaflet
    if (typeof window !== "undefined") {
      const hasRequiredFeatures =
        typeof fetch !== "undefined" &&
        typeof Promise !== "undefined" &&
        typeof Map !== "undefined" &&
        typeof Set !== "undefined"

      if (!hasRequiredFeatures) {
        setError(true)
      }
    }
  }, [])

  if (error) {
    return (
      <div className="bg-gray-100 border border-gray-300 rounded-lg flex flex-col items-center justify-center p-8 text-center" style={{ height: props.height || "100%" }}>
        <p className="text-gray-700 font-medium mb-2">Carte non disponible</p>
        <p className="text-sm text-gray-600">
          Votre navigateur ne supporte pas cette fonctionnalité.
        </p>
        {props.popupText && (
          <div className="mt-4 text-sm text-gray-700 bg-white p-3 rounded border">
            {props.popupText}
          </div>
        )}
      </div>
    )
  }

  return <MapWithNoSSR {...props} />
} 