(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projet-interne/y3-audit-conseils/app/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RendezVousForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client"
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { LinkedInLogo } from "./linkedin-logo"
// import { EmailIcon } from "./email-icon"
// import { LocationIcon } from "./location-icon"
// import { WhatsAppIcon } from "./whatsapp-icon"
// import { cn } from "@/lib/utils"
// interface NavItem {
//   label: string
//   href: string
//   children?: NavItem[]
// }
// export function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
//   const navItems: NavItem[] = [
//     {
//       label: "Découvrez le cabinet",
//       href: "#",
//       children: [
//         { label: "Notre histoire", href: "/a-propos/notre-histoire" },
//         { label: "Notre équipe", href: "/a-propos/notre-equipe" },
//         { label: "Nos valeurs", href: "/a-propos/notre-equipe#nos-valeurs" },
//       ],
//     },
//     {
//       label: "Métiers",
//       href: "#",
//       children: [
//         { label: "Nos métiers", href: "/services/nos-metiers" },
//         { label: "Expertise comptable", href: "/services/expertise-comptable" },
//         { label: "Audit", href: "/services/audit" },
//         { label: "Conseil financier", href: "/services/conseil-financier" },
//         { label: "Conseil opérationnel", href: "/services/conseil-operationnel" },
//       ],
//     },
//     {
//       label: "Insights",
//       href: "#",
//       children: [
//         { label: "Banking Pulse", href: "/donnees" },
//         { label: "Actualités", href: "/actualites" },
//       ],
//     },
//     {
//       label: "Carrières",
//       href: "#",
//       children: [
//         { label: "Offres d'emploi", href: "/rejoignez-nous/carrieres" },
//         { label: "Candidature spontanée", href: "/rejoignez-nous/candidature" },
//       ],
//     },
//   ]
//   useEffect(() => {
//     // Vérifier si on est côté client
//     if (typeof window === "undefined") return
//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset || 0
//       if (scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//       setActiveDropdown(null)
//     }
//     // Utiliser requestAnimationFrame pour améliorer les performances
//     let ticking = false
//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           handleScroll()
//           ticking = false
//         })
//         ticking = true
//       }
//     }
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => {
//       window.removeEventListener("scroll", onScroll)
//       if (hoverTimeout) {
//         clearTimeout(hoverTimeout)
//       }
//     }
//   }, [hoverTimeout])
//   const toggleDropdown = (label: string) => {
//     if (activeDropdown === label) {
//       setActiveDropdown(null)
//     } else {
//       setActiveDropdown(label)
//     }
//   }
//   const handleMouseEnter = (label: string) => {
//     if (hoverTimeout) {
//       clearTimeout(hoverTimeout)
//       setHoverTimeout(null)
//     }
//     setActiveDropdown(label)
//   }
//   const handleMouseLeave = () => {
//     const timeout = setTimeout(() => {
//       setActiveDropdown(null)
//     }, 200)
//     setHoverTimeout(timeout)
//   }
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 w-full">
//       <div className={cn(
//         "transition-all duration-300 hidden md:block",
//         scrolled 
//           ? "bg-[#073E5D] text-white py-2 xs:py-2.5 sm:py-3" 
//           : "bg-[#073E5D] text-white py-2 xs:py-2.5 sm:py-3"
//       )}>
//         <div className="container mx-auto px-2 xs:px-3 sm:px-4">
//           <div className="flex flex-wrap justify-between items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
//             <div className="flex flex-wrap items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6">
//               <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm xs:text-base hover:text-[#80C342] transition-colors">
//                 <WhatsAppIcon size={13} className="xs:size-[15] mr-1 text-green-300" />
//                 <span className="leading-none">+2250546006393</span>
//               </a>
//               <button 
//                 onClick={() => {
//                   const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com';
//                   window.open(url, '_blank');
//                 }}
//                 className="hidden sm:flex items-center text-sm xs:text-base hover:text-[#80C342] transition-colors"
//               >
//                 <EmailIcon size={13} className="xs:size-[15] mr-1 text-green-300" />
//                 <span className="hidden md:inline leading-none">hello@ycubeac.com</span>
//                 <span className="md:hidden leading-none">Email</span>
//               </button>
//               <a 
//                 href="https://maps.app.goo.gl/QhNNqo1q4MrjWkpk8" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="hidden lg:flex items-center text-sm xs:text-base hover:text-[#80C342] transition-colors"
//               >
//                 <LocationIcon size={13} className="xs:size-[15] mr-1 text-green-300" />
//                 <span className="leading-none">Cocody, Riviera</span>
//               </a>
//             </div>
//             <div className="flex items-center justify-end">
//               <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#80C342] transition-colors" aria-label="LinkedIn">
//                 <LinkedInLogo size={18} className="xs:size-[20]" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={cn(
//         "transition-all duration-300",
//         scrolled 
//           ? "bg-gray-800/95 backdrop-blur-lg py-1.5 shadow-lg" 
//           : "bg-transparent py-1.5 xs:py-2 sm:py-2.5"
//       )}>
//         <div className="container mx-auto px-2 xs:px-3 sm:px-4">
//           <div className="flex justify-between items-center">
//             <Link href="/" className="flex items-center flex-shrink-0">
//               <Image
//                 src="/Logo-y3.png"
//                 alt="Y3 Audit & Conseils"
//                 width={120}
//                 height={42}
//                 priority
//                 unoptimized
//                 className={cn(
//                   "transition-all duration-300 h-auto w-auto object-contain",
//                   scrolled
//                     ? "h-12 w-auto sm:h-9 sm:w-auto md:h-10 md:w-auto lg:h-11 lg:w-auto xl:h-12 xl:w-auto"
//                     : "h-14 w-auto xs:h-10 xs:w-auto sm:h-11 sm:w-auto md:h-12 md:w-auto lg:h-14 lg:w-auto xl:h-16 xl:w-auto"
//                 )}
//               />
//             </Link>
//             <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
//               {navItems.map((item) => (
//                 <div
//                   key={item.label}
//                   className="relative group"
//                   onMouseEnter={() => {
//                     if (item.children) {
//                       handleMouseEnter(item.label)
//                     }
//                   }}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <button
//                     className={cn(
//                       "flex items-center font-semibold text-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-2 rounded-md px-2 py-1",
//                       scrolled 
//                         ? "text-white hover:text-[#80C342] drop-shadow-none" 
//                         : "text-white hover:text-[#80C342] drop-shadow-lg"
//                     )}
//                     onClick={() => toggleDropdown(item.label)}
//                     aria-expanded={activeDropdown === item.label}
//                     aria-haspopup="true"
//                   >
//                     {item.label}
//                     <ChevronDown 
//                       size={16} 
//                       className={`ml-1 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
//                     />
//                   </button>
//                   {activeDropdown === item.label && item.children && (
//                     <div
//                       className={cn(
//                         "absolute left-0 mt-2 w-64 backdrop-blur-lg rounded-md shadow-lg py-1 z-10 border animate-fade-in-up",
//                         scrolled 
//                           ? "bg-gray-700/80 border-gray-600" 
//                           : "bg-gray-900/95 border-gray-700"
//                       )}
//                       role="menu"
//                       aria-label={`Sous-menu ${item.label}`}
//                       onMouseEnter={() => {
//                         if (hoverTimeout) {
//                           clearTimeout(hoverTimeout)
//                           setHoverTimeout(null)
//                         }
//                         setActiveDropdown(item.label)
//                       }}
//                       onMouseLeave={handleMouseLeave}
//                     >
//                       {item.children.map((child) => (
//                         <Link
//                           key={child.label}
//                           href={child.href}
//                           className={cn(
//                             "block px-4 py-2 text-base font-medium transition-all duration-200 rounded-md mx-1 focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-1",
//                             scrolled 
//                               ? "text-white hover:bg-gray-600/50 hover:text-[#80C342]" 
//                               : "text-white hover:bg-white/10 hover:text-[#80C342]"
//                           )}
//                           role="menuitem"
//                           onClick={() => setActiveDropdown(null)}
//                         >
//                           {child.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <Link
//                 href="/contact/rendez-vous"
//                 className={cn(
//                   "px-3 xs:px-4 md:px-6 py-2 xs:py-2.5 md:py-3 rounded-lg transition-all duration-300 text-sm xs:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2",
//                   scrolled 
//                     ? "bg-[#80C342] hover:bg-[#073E5D] text-white focus-visible:outline-[#80C342]" 
//                     : "bg-[#80C342] hover:bg-[#073E5D] text-white focus-visible:outline-white"
//                 )}
//               >
//                 <span className="hidden md:inline">Prendre rendez-vous</span>
//                 <span className="md:hidden">Rendez-vous</span>
//               </Link>
//             </nav>
//             <button 
//               className={cn(
//                 "md:hidden px-2 py-1 rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-2 flex items-center justify-center",
//                 scrolled 
//                   ? "text-white hover:text-[#80C342]" 
//                   : "text-white hover:text-[#80C342]"
//               )}
//               onClick={() => setIsOpen(!isOpen)}
//               aria-expanded={isOpen}
//               aria-label="Menu de navigation"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-white border-t shadow-lg animate-fade-in-up max-h-[80vh] overflow-y-auto mobile-menu-scroll smooth-scroll w-full">
//           <div className="container mx-auto px-3 xs:px-4 py-3 w-full">
//             {navItems.map((item) => (
//               <div key={item.label} className="py-2">
//                 <button
//                   className="flex items-center justify-between w-full text-[#073E5D] text-lg font-medium hover:text-[#80C342] transition-colors duration-200 p-2 rounded-md focus-visible:outline-2 focus-visible:outline-[#80C342] focus-visible:outline-offset-1"
//                   onClick={() => toggleDropdown(item.label)}
//                   aria-expanded={activeDropdown === item.label}
//                 >
//                   {item.label}
//                   <ChevronDown
//                     size={16}
//                     className={cn(
//                       "transition-transform duration-200",
//                       activeDropdown === item.label ? "transform rotate-180" : "",
//                     )}
//                   />
//                 </button>
//                 {activeDropdown === item.label && item.children && (
//                   <div className="mt-2 ml-4 border-l-2 border-[#80C342] pl-4 max-h-60 overflow-y-auto submenu-scroll smooth-scroll">
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.label}
//                         href={child.href}
//                         className="block py-2 text-[#073E5D] hover:text-[#80C342] hover:bg-gray-50 rounded-md px-2 transition-colors"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div className="mt-4 pt-4 border-t">
//               <Link
//                 href="/contact/rendez-vous"
//                 className="block w-full bg-[#80C342] hover:bg-[#073E5D] text-white text-center px-5 py-2 rounded-md transition-colors duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Prendre rendez-vous
//               </Link>
//               <div className="mt-4 space-y-2">
//                 <a href="https://wa.me/2250546006393" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors">
//                   <span>+2250546006393</span>
//                 </a>
//                 <button 
//                   onClick={() => {
//                     const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@ycubeac.com';
//                     window.open(url, '_blank');
//                   }}
//                   className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors"
//                 >
//                   <EmailIcon size={14} className="mr-1 text-green-400" />
//                   <span>hello@ycubeac.com</span>
//                 </button>
//                 <a 
//                   href="https://maps.app.goo.gl/QhNNqo1q4MrjWkpk8" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex items-center text-sm text-gray-600 hover:text-[#80C342] transition-colors"
//                 >
//                   <LocationIcon size={14} className="mr-1 text-green-400" />
//                   <span>Cocody, Riviera</span>
//                 </a>
//               </div>
//               <div className="mt-4 flex items-center space-x-4">
//                 <a href="https://www.linkedin.com/company/y3-audit-conseils/" target="_blank" rel="noopener noreferrer" className="text-[#073E5D] hover:text-[#80C342]" aria-label="LinkedIn">
//                   <LinkedInLogo size={22} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }
"use client";
;
function RendezVousForm() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [nom, setNom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Gérer le scroll pour savoir la hauteur du header
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RendezVousForm.useEffect": ()=>{
            const handleScroll = {
                "RendezVousForm.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY || window.pageYOffset;
                    setScrolled(scrollY > 50);
                }
            }["RendezVousForm.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "RendezVousForm.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["RendezVousForm.useEffect"];
        }
    }["RendezVousForm.useEffect"], []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Ici tu peux envoyer les données à ton backend
            await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    nom,
                    message
                })
            });
            setIsSubmitted(true);
            setEmail("");
            setNom("");
            setMessage("");
            // Réinitialiser après 3 secondes
            setTimeout(()=>setIsSubmitted(false), 3000);
        } catch (error) {
            console.error(error);
        } finally{
            setIsSubmitting(false);
        }
    };
    // Déterminer la hauteur du header pour que le message de confirmation ne soit pas caché
    const headerHeight = scrolled ? 60 : 70 // à adapter si ton header change de hauteur
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 transition-all duration-300",
                style: {
                    top: "".concat(headerHeight, "px")
                },
                children: "Demande de rendez-vous confirmée !"
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                lineNumber: 427,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "max-w-lg mx-auto p-4 sm:p-6 bg-white rounded-md shadow-md mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-medium mb-1",
                                children: "Nom"
                            }, void 0, false, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: nom,
                                onChange: (e)=>setNom(e.target.value),
                                required: true,
                                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            }, void 0, false, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-medium mb-1",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                required: true,
                                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            }, void 0, false, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-medium mb-1",
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: message,
                                onChange: (e)=>setMessage(e.target.value),
                                required: true,
                                rows: 4,
                                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            }, void 0, false, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: isSubmitting ? "Envoi..." : "Envoyer la demande"
                    }, void 0, false, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/header.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
}
_s(RendezVousForm, "Vwltk8lxuAD5X2DPKYXMOXQR3to=");
_c = RendezVousForm;
var _c;
__turbopack_context__.k.register(_c, "RendezVousForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projet-interne/y3-audit-conseils/app/components/header.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/header.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=projet-interne_y3-audit-conseils_app_components_header_tsx_3284b95f._.js.map