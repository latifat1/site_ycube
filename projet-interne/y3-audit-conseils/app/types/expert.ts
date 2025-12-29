export interface Expert {
  id: number
  name: string
  position: string
  image: string
  slug: string
  isPartner: boolean
  bio?: string
  description: string[]
  office?: string
  contact: {
    email: string
    phone: string
    phoneSecondary?: string
    linkedin: string
  }
}
