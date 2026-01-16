module.exports = [
"[project]/projet-interne/y3-audit-conseils/app/hooks/use-page-image.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePageImage",
    ()=>usePageImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/slider-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function usePageImage(imagePath) {
    const { setCurrentImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlider"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentImage(imagePath);
    }, [
        imagePath,
        setCurrentImage
    ]);
}
}),
"[project]/projet-interne/y3-audit-conseils/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainSlider",
    ()=>MainSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/slider-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MainSlider({ slides: customSlides } = {}) {
    const { currentImage, setCurrentImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlider"])();
    const defaultSlides = [
        {
            id: 1,
            title: "Bienvenue chez Y3 Audit & Conseils",
            description: "Votre partenaire de confiance pour l'audit, le conseil et l'expertise comptable.",
            image: "/Expert.jpg",
            buttonText: "Nos services",
            buttonLink: "/services",
            priority: true
        },
        {
            id: 2,
            title: "Des experts à votre écoute",
            description: "Une équipe pluridisciplinaire pour répondre à tous vos besoins.",
            image: "/Experts.jpg",
            buttonText: "Découvrir l'équipe",
            buttonLink: "/a-propos/notre-equipe",
            priority: true
        },
        {
            id: 3,
            title: "Une expertise reconnue",
            description: "Audit, expertise comptable et conseil financier.",
            image: "/expertises.jpg",
            buttonText: "Nos domaines d'expertise",
            buttonLink: "/services/expertise-sectorielle",
            priority: true
        }
    ];
    const slides = customSlides || defaultSlides;
    const hasMultipleSlides = slides.length > 1;
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(hasMultipleSlides);
    const autoPlayTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextSlide = ()=>{
        setCurrentSlide((prev)=>prev === slides.length - 1 ? 0 : prev + 1);
    };
    const prevSlide = ()=>{
        setCurrentSlide((prev)=>prev === 0 ? slides.length - 1 : prev - 1);
    };
    const startAutoPlay = ()=>{
        if (!hasMultipleSlides) return;
        if (autoPlayTimerRef.current) {
            clearInterval(autoPlayTimerRef.current);
        }
        autoPlayTimerRef.current = setInterval(()=>{
            nextSlide();
        }, 5000);
    };
    const stopAutoPlay = ()=>{
        if (autoPlayTimerRef.current) {
            clearInterval(autoPlayTimerRef.current);
            autoPlayTimerRef.current = null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAutoPlaying && hasMultipleSlides) {
            startAutoPlay();
        }
        return ()=>{
            stopAutoPlay();
        };
    }, [
        isAutoPlaying,
        currentSlide,
        hasMultipleSlides
    ]);
    // Le MainSlider ne définit plus l'image du header
    // Chaque page gère sa propre image via usePageImage
    const handleMouseEnter = ()=>{
        if (hasMultipleSlides) {
            setIsAutoPlaying(false);
        }
    };
    const handleMouseLeave = ()=>{
        if (hasMultipleSlides) {
            setIsAutoPlaying(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[720px] 2xl:h-[800px] overflow-hidden",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 transition-opacity duration-1000", index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.image,
                            alt: slide.title,
                            fill: true,
                            sizes: "100vw",
                            priority: slide.priority,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black bg-opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-start pt-[30px] sm:pt-[35px] md:pt-[40px] lg:pt-[45px] xl:pt-[50px] 2xl:pt-[55px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-left w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-4xl pl-2 sm:pl-4 md:pl-6 lg:pl-12 xl:pl-20 2xl:pl-28 pr-4 sm:pr-6 md:pr-8 lg:pr-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-tight sm:whitespace-nowrap",
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-1 bg-[#80C342] mb-3 sm:mb-4 md:mb-5", slide.title === "Audit" ? "w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16" : "w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28")
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, slide.id, true, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)),
            hasMultipleSlides && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-0 right-0 z-20 flex justify-center space-x-2 sm:space-x-3",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentSlide(index),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300", index === currentSlide ? "bg-[#80C342] w-8 sm:w-10 md:w-12" : "bg-white bg-opacity-50 hover:bg-opacity-100"),
                        "aria-label": `Aller à la diapositive ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
"[project]/projet-interne/y3-audit-conseils/app/components/animations.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeInWhenVisible",
    ()=>FadeInWhenVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/framer-motion@12.24.11_reac_befa07c183d2933b267807b902bb56f8/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/framer-motion@12.24.11_reac_befa07c183d2933b267807b902bb56f8/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/framer-motion@12.24.11_reac_befa07c183d2933b267807b902bb56f8/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function FadeInWhenVisible({ children, delay = 0.3 }) {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInView) {
            controls.start("visible");
        }
    }, [
        controls,
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        animate: controls,
        initial: "hidden",
        transition: {
            duration: 0.5,
            delay
        },
        variants: {
            visible: {
                opacity: 1,
                y: 0
            },
            hidden: {
                opacity: 0,
                y: 50
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/animations.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BankingPulsePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$hooks$2f$use$2d$page$2d$image$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/hooks/use-page-image.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$main$2d$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$animations$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/animations.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
// "use client"
// import { usePageImage } from "@/app/hooks/use-page-image"
// import { MainSlider, type Slide } from "@/app/components/main-slider"
// export default function DonneesPage() {
//   usePageImage('/expertises.webp')
//   const donneesSlides: Slide[] = [
//     {
//       id: 1,
//       title: "Banking Pulse",
//       description: "Découvrez nos analyses et données sur le secteur bancaire et financier.",
//       image: "/15.png",
//       buttonText: "Explorer les données",
//       buttonLink: "/donnees",
//       priority: true,
//     },
//   ]
//   const stats = [
//     {
//       value: "500+",
//       label: "Entreprises accompagnées",
//       description: "Clients satisfaits depuis notre création"
//     },
//     {
//       value: "30+",
//       label: "Années d'expérience",
//       description: "Expertise reconnue dans le secteur"
//     },
//     {
//       value: "50+",
//       label: "Experts qualifiés",
//       description: "Équipe de professionnels certifiés"
//     },
//     {
//       value: "98%",
//       label: "Taux de satisfaction",
//       description: "Retour positif de nos clients"
//     }
//   ]
//   const trends = [
//     {
//       category: "Audit & Certification",
//       percentage: 45,
//       color: "bg-[#073E5D]"
//     },
//     {
//       category: "Conseil Financier",
//       percentage: 30,
//       color: "bg-[#80C342]"
//     },
//     {
//       category: "Expertise Comptable",
//       percentage: 20,
//       color: "bg-blue-600"
//     },
//     {
//       category: "Conseil Opérationnel",
//       percentage: 5,
//       color: "bg-purple-600"
//     }
//   ]
//   return (
//     <>
//       <MainSlider slides={donneesSlides} />
//       <main className="bg-white">
//         {/* Hero Section */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Données</h1>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>
//           </div>
//         </section>
//         {/* Stats Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nos Performances</h2>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="text-3xl font-bold text-[#073E5D] mb-2">{stat.value}</div>
//                   <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
//                   <div className="text-sm text-gray-600">{stat.description}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Trends Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Répartition de nos Activités</h2>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>
//             <div className="max-w-4xl mx-auto">
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <div className="space-y-6">
//                   {trends.map((trend, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-48 text-sm font-medium text-gray-700">
//                         {trend.category}
//                       </div>
//                       <div className="flex-1 mx-4">
//                         <div className="w-full bg-gray-200 rounded-full h-4">
//                           <div
//                             className={`h-4 rounded-full ${trend.color} transition-all duration-1000 ease-out`}
//                             style={{ width: `${trend.percentage}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div className="w-16 text-right text-sm font-bold text-[#073E5D]">
//                         {trend.percentage}%
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Graphiques Section */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="mb-12 pl-8 md:pl-32">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Analyses Graphiques</h2>
//               <div className="w-20 h-1 bg-[#80C342]"></div>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//               {/* Graphique en barres - Évolution des clients */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Évolution du Nombre de Clients
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { year: "2020", clients: 120, percentage: 60 },
//                     { year: "2021", clients: 180, percentage: 90 },
//                     { year: "2022", clients: 250, percentage: 100 },
//                     { year: "2023", clients: 320, percentage: 100 },
//                     { year: "2024", clients: 400, percentage: 100 }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-16 text-sm font-medium text-gray-700">
//                         {item.year}
//                       </div>
//                       <div className="flex-1 mx-4">
//                         <div className="w-full bg-gray-200 rounded-full h-6">
//                           <div
//                             className="h-6 rounded-full bg-gradient-to-r from-[#073E5D] to-[#80C342] transition-all duration-1000 ease-out"
//                             style={{ width: `${item.percentage}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div className="w-20 text-right text-sm font-bold text-[#073E5D]">
//                         {item.clients}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Graphique circulaire simulé - Types de services */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Répartition des Services
//                 </h3>
//                 <div className="flex justify-center mb-6">
//                   <div className="relative w-48 h-48">
//                     {/* Simulation d'un graphique circulaire avec des sections */}
//                     <div className="absolute inset-0 rounded-full border-8 border-[#073E5D]" style={{
//                       background: `conic-gradient(
//                         #073E5D 0deg 162deg,
//                         #80C342 162deg 270deg,
//                         #3B82F6 270deg 342deg,
//                         #8B5CF6 342deg 360deg
//                       )`
//                     }}></div>
//                     <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-[#073E5D]">100%</div>
//                         <div className="text-sm text-gray-600">Services</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   {[
//                     { label: "Audit & Certification", color: "bg-[#073E5D]", percentage: "45%" },
//                     { label: "Conseil Financier", color: "bg-[#80C342]", percentage: "30%" },
//                     { label: "Expertise Comptable", color: "bg-blue-600", percentage: "20%" },
//                     { label: "Conseil Opérationnel", color: "bg-purple-600", percentage: "5%" }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
//                         <span className="text-sm text-gray-700">{item.label}</span>
//                       </div>
//                       <span className="text-sm font-bold text-[#073E5D]">{item.percentage}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Graphique linéaire simulé - Croissance du chiffre d'affaires */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Croissance du Chiffre d'Affaires
//                 </h3>
//                 <div className="relative h-64 bg-gray-50 rounded-lg p-4">
//                   {/* Simulation d'une courbe de croissance */}
//                   <div className="absolute bottom-4 left-4 right-4 h-32">
//                     <svg className="w-full h-full" viewBox="0 0 400 120">
//                       <polyline
//                         points="0,100 80,80 160,60 240,40 320,20 400,10"
//                         fill="none"
//                         stroke="#80C342"
//                         strokeWidth="3"
//                       />
//                       <circle cx="0" cy="100" r="4" fill="#073E5D" />
//                       <circle cx="80" cy="80" r="4" fill="#073E5D" />
//                       <circle cx="160" cy="60" r="4" fill="#073E5D" />
//                       <circle cx="240" cy="40" r="4" fill="#073E5D" />
//                       <circle cx="320" cy="20" r="4" fill="#073E5D" />
//                       <circle cx="400" cy="10" r="4" fill="#073E5D" />
//                     </svg>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
//                     <span>2020</span>
//                     <span>2021</span>
//                     <span>2022</span>
//                     <span>2023</span>
//                     <span>2024</span>
//                     <span>2025</span>
//                   </div>
//                 </div>
//                 <div className="mt-4 text-center">
//                   <div className="text-2xl font-bold text-[#80C342]">+25%</div>
//                   <div className="text-sm text-gray-600">Croissance annuelle moyenne</div>
//                 </div>
//               </div>
//               {/* Graphique en aires - Satisfaction client */}
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-[#073E5D] mb-6 text-center">
//                   Évolution de la Satisfaction Client
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { month: "Jan", satisfaction: 92 },
//                     { month: "Fév", satisfaction: 94 },
//                     { month: "Mar", satisfaction: 96 },
//                     { month: "Avr", satisfaction: 95 },
//                     { month: "Mai", satisfaction: 97 },
//                     { month: "Jun", satisfaction: 98 }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-12 text-sm font-medium text-gray-700">
//                         {item.month}
//                       </div>
//                       <div className="flex-1 mx-4">
//                         <div className="w-full bg-gray-200 rounded-full h-4">
//                           <div
//                             className="h-4 rounded-full bg-gradient-to-r from-[#80C342] to-green-400 transition-all duration-1000 ease-out"
//                             style={{ width: `${item.satisfaction}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                       <div className="w-12 text-right text-sm font-bold text-[#073E5D]">
//                         {item.satisfaction}%
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6 text-center">
//                   <div className="text-2xl font-bold text-[#80C342]">96.8%</div>
//                   <div className="text-sm text-gray-600">Satisfaction moyenne</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }
"use client";
;
;
;
;
;
;
function BankingPulsePage() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$hooks$2f$use$2d$page$2d$image$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePageImage"])("/expertises.webp");
    const slides = [
        {
            id: 1,
            title: "Banking Pulse 2024",
            description: "L’heure de la consolidation pour les banques cotées de l’UEMOA",
            image: "/15.png",
            buttonText: "Télécharger le rapport complet",
            buttonLink: "#",
            priority: true
        }
    ];
    // 🔹 Données principales du rapport
    const bilanData = [
        {
            name: "Secteur bancaire",
            valeur: 9.3
        },
        {
            name: "Banques cotées",
            valeur: 5.0
        }
    ];
    const portefeuilleData = [
        {
            name: "Dépôts",
            value: 13141
        },
        {
            name: "Crédits",
            value: 8756
        }
    ];
    const COLORS = [
        "#073E5D",
        "#80C342"
    ];
    const croissanceData = [
        {
            year: "2020",
            PNB: 710,
            ROE: 18
        },
        {
            year: "2021",
            PNB: 780,
            ROE: 20
        },
        {
            year: "2022",
            PNB: 880,
            ROE: 22
        },
        {
            year: "2023",
            PNB: 925,
            ROE: 23.4
        }
    ];
    const gouvernanceData = [
        {
            banque: "Moyenne UEMOA",
            femmes: 24
        },
        {
            banque: "SGCI",
            femmes: 45
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$main$2d$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainSlider"], {
                slides: slides
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-gray-50 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$animations$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeInWhenVisible"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12 pl-4 sm:pl-12 md:pl-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl md:text-5xl font-bold text-[#073E5D] mb-4",
                                        children: "Banking Pulse 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-1 bg-[#80C342] mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 max-w-3xl leading-relaxed text-lg",
                                        children: "L’année 2023 a marqué une phase de **consolidation** pour les banques cotées de l’UEMOA, après plusieurs années de forte croissance. Malgré un contexte de resserrement monétaire et de pressions inflationnistes, la solidité du secteur reste remarquable, portée par une amélioration du rendement des capitaux propres (ROE : 23,4 %) et une croissance soutenue du produit net bancaire (+4,8 %)."
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-[#073E5D] mb-4",
                                        children: "Vue d’ensemble du secteur"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8 max-w-3xl",
                                        children: "Le total de bilan du secteur bancaire régional s’est établi à **72 068 milliards FCFA** (+9,3 %), tandis que les banques cotées ont progressé de **5 %**, atteignant **15 299 milliards FCFA**."
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "p-6 shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 300,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: bilanData,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            unit: "%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "valeur",
                                                            fill: "#073E5D",
                                                            radius: [
                                                                8,
                                                                8,
                                                                0,
                                                                0
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-[#073E5D] mb-4",
                                        children: "Structure du portefeuille"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8 max-w-3xl",
                                        children: "Les **dépôts** ont atteint 13 141 milliards FCFA (+4,6 %) tandis que les **crédits** s’élèvent à 8 756 milliards FCFA (+1,6 %)."
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-center justify-center gap-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: 300,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                                        data: portefeuilleData,
                                                        dataKey: "value",
                                                        cx: "50%",
                                                        cy: "50%",
                                                        outerRadius: 100,
                                                        label: true,
                                                        children: portefeuilleData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                                                fill: COLORS[index % COLORS.length]
                                                            }, `cell-${index}`, false, {
                                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-[#073E5D] mb-4",
                                        children: "Performance financière"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8 max-w-3xl",
                                        children: "En 2023, les banques cotées ont enregistré une croissance du **PNB de +4,8 %**, du **résultat d’exploitation de +11,7 %**, tandis que le **coût du risque** a progressé de +8,5 %. Le **rendement des capitaux propres (ROE)** atteint **23,4 %**, confirmant la résilience du secteur."
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "p-6 shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 350,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                                    data: croissanceData,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            yAxisId: "left",
                                                            orientation: "left",
                                                            stroke: "#073E5D"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            yAxisId: "right",
                                                            orientation: "right",
                                                            stroke: "#80C342"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                                            yAxisId: "left",
                                                            type: "monotone",
                                                            dataKey: "PNB",
                                                            stroke: "#073E5D",
                                                            strokeWidth: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                                            yAxisId: "right",
                                                            type: "monotone",
                                                            dataKey: "ROE",
                                                            stroke: "#80C342",
                                                            strokeWidth: 3,
                                                            dot: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-[#073E5D] mb-4",
                                        children: "Gouvernance et diversité"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8 max-w-3xl",
                                        children: "En matière de gouvernance, les femmes représentent en moyenne **24 %** des conseils d’administration, avec un pic de **45 %** à la SGCI, soulignant une progression notable mais encore perfectible."
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "p-6 shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 300,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: gouvernanceData,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "banque"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            unit: "%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "femmes",
                                                            fill: "#80C342",
                                                            radius: [
                                                                8,
                                                                8,
                                                                0,
                                                                0
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                                lineNumber: 460,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "pb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-[#073E5D] mb-4",
                                        children: "Perspectives 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 max-w-3xl leading-relaxed",
                                        children: "Les perspectives du secteur restent positives, portées par la digitalisation, l’inclusion financière et l’intégration régionale. Toutefois, la consolidation du marché et le renforcement des fonds propres demeurent des impératifs stratégiques. Les banques devront accélérer la transformation digitale et renforcer leur gestion des risques pour maintenir leur rentabilité à long terme."
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/donnees/page.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=projet-interne_y3-audit-conseils_6f3b1471._.js.map