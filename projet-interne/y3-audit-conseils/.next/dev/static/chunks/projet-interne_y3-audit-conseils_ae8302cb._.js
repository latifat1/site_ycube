(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertModal",
    ()=>ExpertModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$linkedin$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/linkedin-logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$whatsapp$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/whatsapp-icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ExpertModal(param) {
    let { expert, isOpen, onClose } = param;
    _s();
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpertModal.useEffect": ()=>{
            if (isOpen) {
                setIsAnimating(true);
                // Prevent scrolling when modal is open
                document.body.style.overflow = "hidden";
            } else {
                // Allow scrolling when modal is closed
                document.body.style.overflow = "auto";
            }
            return ({
                "ExpertModal.useEffect": ()=>{
                    document.body.style.overflow = "auto";
                }
            })["ExpertModal.useEffect"];
        }
    }["ExpertModal.useEffect"], [
        isOpen
    ]);
    const handleClose = ()=>{
        setIsAnimating(false);
        setTimeout(()=>{
            onClose();
        }, 300);
    };
    // Handle click outside to close
    const handleBackdropClick = (e)=>{
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };
    // Handle escape key to close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpertModal.useEffect": ()=>{
            const handleEscKey = {
                "ExpertModal.useEffect.handleEscKey": (e)=>{
                    if (e.key === "Escape") {
                        handleClose();
                    }
                }
            }["ExpertModal.useEffect.handleEscKey"];
            if (isOpen) {
                window.addEventListener("keydown", handleEscKey);
            }
            return ({
                "ExpertModal.useEffect": ()=>{
                    window.removeEventListener("keydown", handleEscKey);
                }
            })["ExpertModal.useEffect"];
        }
    }["ExpertModal.useEffect"], [
        isOpen
    ]);
    if (!expert) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ".concat(isOpen && isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"),
        onClick: handleBackdropClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl overflow-auto max-w-3xl w-full max-h-[90vh] transition-transform duration-300 ".concat(isOpen && isAnimating ? "scale-100" : "scale-95"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none",
                        "aria-label": "Fermer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-square overflow-hidden rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: expert.image || "/placeholder.svg",
                                            alt: expert.name,
                                            fill: true,
                                            className: "object-cover",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: expert.contact.linkedin,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-[#073E5D] hover:text-[#80C342] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$linkedin$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedInLogo"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            expert.contact.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://wa.me/".concat(expert.contact.phone.replace(/[^0-9]/g, '')),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-2 bg-[#073E5D] text-white p-2 rounded-md hover:bg-[#052d43] transition-colors w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$whatsapp$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                                        size: 18,
                                                        className: "text-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm truncate",
                                                        children: expert.contact.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            expert.contact.phoneSecondary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://wa.me/".concat(expert.contact.phoneSecondary.replace(/[^0-9]/g, '')),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-2 bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 transition-colors w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$whatsapp$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                                        size: 18,
                                                        className: "text-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm truncate",
                                                        children: expert.contact.phoneSecondary
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-3/4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-[#073E5D]",
                                        children: expert.name
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-4",
                                        children: expert.position
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 mb-4",
                                        children: expert.bio
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    expert.description.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 mb-4",
                                            children: paragraph
                                        }, index, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 p-3 bg-gray-100 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 font-medium",
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:".concat(expert.contact.email),
                                                className: "text-[#073E5D] hover:underline",
                                                children: expert.contact.email
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 font-semibold mt-4",
                                        children: expert.office
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(ExpertModal, "+QzuKG9BPTgtAVJIaW3g+huByMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ExpertModal;
var _c;
__turbopack_context__.k.register(_c, "ExpertModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projet-interne/y3-audit-conseils/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainSlider",
    ()=>MainSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/slider-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MainSlider() {
    let { slides: customSlides } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { currentImage, setCurrentImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlider"])();
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
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(hasMultipleSlides);
    const autoPlayTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainSlider.useEffect": ()=>{
            if (isAutoPlaying && hasMultipleSlides) {
                startAutoPlay();
            }
            return ({
                "MainSlider.useEffect": ()=>{
                    stopAutoPlay();
                }
            })["MainSlider.useEffect"];
        }
    }["MainSlider.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[720px] 2xl:h-[800px] overflow-hidden",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 transition-opacity duration-1000", index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black bg-opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-start pt-[30px] sm:pt-[35px] md:pt-[40px] lg:pt-[45px] xl:pt-[50px] 2xl:pt-[55px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-left w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-4xl pl-2 sm:pl-4 md:pl-6 lg:pl-12 xl:pl-20 2xl:pl-28 pr-4 sm:pr-6 md:pr-8 lg:pr-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-tight sm:whitespace-nowrap",
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1 bg-[#80C342] mb-3 sm:mb-4 md:mb-5", slide.title === "Audit" ? "w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16" : "w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28")
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
            hasMultipleSlides && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-0 right-0 z-20 flex justify-center space-x-2 sm:space-x-3",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentSlide(index),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300", index === currentSlide ? "bg-[#80C342] w-8 sm:w-10 md:w-12" : "bg-white bg-opacity-50 hover:bg-opacity-100"),
                        "aria-label": "Aller à la diapositive ".concat(index + 1)
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
_s(MainSlider, "Gn4Uy0YszSEEpyhZUt+oef8Tf+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlider"]
    ];
});
_c = MainSlider;
var _c;
__turbopack_context__.k.register(_c, "MainSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertsCarousel",
    ()=>ExpertsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$linkedin$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/linkedin-logo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ExpertsCarousel(param) {
    let { experts, onExpertClick, title } = param;
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoScrolling, setIsAutoScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const autoScrollTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isExpertsSection = title === "Nos Experts";
    // Responsive items per page
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpertsCarousel.useEffect": ()=>{
            function handleResize() {
                if (window.innerWidth < 640) {
                    setItemsPerPage(1);
                } else if (window.innerWidth < 1024) {
                    setItemsPerPage(2);
                } else {
                    setItemsPerPage(3);
                }
            }
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "ExpertsCarousel.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["ExpertsCarousel.useEffect"];
        }
    }["ExpertsCarousel.useEffect"], []);
    const maxIndex = Math.max(0, experts.length - itemsPerPage);
    const shouldCenter = experts.length <= itemsPerPage;
    const nextSlide = ()=>{
        if (shouldCenter) return; // Ne pas défiler si on doit centrer
        setCurrentIndex((prevIndex)=>prevIndex >= maxIndex ? 0 : prevIndex + 1);
    };
    const prevSlide = ()=>{
        if (shouldCenter) return; // Ne pas défiler si on doit centrer
        setCurrentIndex((prevIndex)=>prevIndex <= 0 ? maxIndex : prevIndex - 1);
    };
    const startAutoScroll = ()=>{
        if (shouldCenter) return; // Ne pas auto-défiler si on doit centrer
        if (autoScrollTimerRef.current) {
            clearInterval(autoScrollTimerRef.current);
        }
        autoScrollTimerRef.current = setInterval(()=>{
            nextSlide();
        }, 5000);
    };
    const stopAutoScroll = ()=>{
        if (autoScrollTimerRef.current) {
            clearInterval(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpertsCarousel.useEffect": ()=>{
            if (isAutoScrolling && !shouldCenter) {
                startAutoScroll();
            }
            return ({
                "ExpertsCarousel.useEffect": ()=>{
                    stopAutoScroll();
                }
            })["ExpertsCarousel.useEffect"];
        }
    }["ExpertsCarousel.useEffect"], [
        isAutoScrolling,
        currentIndex,
        shouldCenter
    ]);
    const handleMouseEnter = ()=>{
        setIsAutoScrolling(false);
    };
    const handleMouseLeave = ()=>{
        setIsAutoScrolling(true);
    };
    const handleLinkedInClick = (e, linkedinUrl)=>{
        e.stopPropagation(); // Empêche le déclenchement du onClick de la carte
        if (linkedinUrl) {
            window.open(linkedinUrl, '_blank');
        }
    };
    if (experts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#073E5D] mb-4 sm:mb-6 md:mb-8 text-center break-words",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden w-full",
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex transition-transform duration-500 ease-in-out w-full", isExpertsSection ? "gap-1.5 sm:gap-2.5 md:gap-3.5" : "gap-3 sm:gap-4 md:gap-5", shouldCenter ? "justify-center" : ""),
                            style: {
                                transform: shouldCenter ? "none" : "translateX(-".concat(currentIndex * 100 / itemsPerPage, "%)")
                            },
                            children: experts.map((expert)=>{
                                var _expert_contact;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-shrink-0", itemsPerPage === 1 ? "w-full px-2" : itemsPerPage === 2 ? "w-1/2 px-2" : "w-1/3 px-2"),
                                    style: !shouldCenter ? {
                                        width: "".concat(100 / itemsPerPage, "%")
                                    } : {
                                        width: "100%",
                                        maxWidth: "320px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white rounded-none overflow-hidden shadow-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full mx-auto flex flex-col", isExpertsSection ? "max-w-[260px]" : "max-w-xs"),
                                        onClick: ()=>onExpertClick(expert),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full overflow-hidden",
                                                style: {
                                                    aspectRatio: '4/5',
                                                    minHeight: 0
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: expert.image || "/placeholder.svg",
                                                    alt: expert.name,
                                                    fill: true,
                                                    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw",
                                                    className: "object-cover object-top transition-transform duration-500 hover:scale-105",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isExpertsSection ? "p-3.5 sm:p-4 md:p-4.5" : "p-3 sm:p-4 md:p-5"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base sm:text-lg md:text-xl font-bold text-[#073E5D]",
                                                        children: expert.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#80C342] font-medium mb-2 text-sm sm:text-base",
                                                        children: expert.position
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    expert.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm sm:text-base mb-3 line-clamp-3",
                                                        children: expert.bio
                                                    }, void 0, false, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-[#073E5D] font-medium hover:text-[#80C342] transition-colors flex items-center text-sm sm:text-base",
                                                                children: "Voir le profil"
                                                            }, void 0, false, {
                                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: (_expert_contact = expert.contact) === null || _expert_contact === void 0 ? void 0 : _expert_contact.linkedin,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-[#073E5D] hover:text-[#80C342] transition-colors cursor-pointer",
                                                                onClick: (e)=>e.stopPropagation(),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$linkedin$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedInLogo"], {
                                                                    size: 20,
                                                                    className: "sm:size-[22]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                }, expert.id, false, {
                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        !shouldCenter && experts.length > itemsPerPage && title !== "Nos Experts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevSlide,
                                    className: "absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#073E5D] p-2 rounded-r-md shadow-md hover:bg-[#80C342] hover:text-white transition-colors duration-300 z-10",
                                    "aria-label": "Précédent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextSlide,
                                    className: "absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#073E5D] p-2 rounded-l-md shadow-md hover:bg-[#80C342] hover:text-white transition-colors duration-300 z-10",
                                    "aria-label": "Suivant",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                !shouldCenter && experts.length > itemsPerPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-6 space-x-2",
                    children: Array.from({
                        length: maxIndex + 1
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentIndex(index),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-full transition-colors duration-300", currentIndex === index ? "bg-[#80C342]" : "bg-gray-300 hover:bg-gray-400"),
                            "aria-label": "Aller à la diapositive ".concat(index + 1)
                        }, index, false, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ExpertsCarousel, "StyyZk+Dgz3WNHkkoQbPHWeVTLk=");
_c = ExpertsCarousel;
var _c;
__turbopack_context__.k.register(_c, "ExpertsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projet-interne/y3-audit-conseils/app/components/animations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeInWhenVisible",
    ()=>FadeInWhenVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/framer-motion@12.24.11_reac_befa07c183d2933b267807b902bb56f8/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/framer-motion@12.24.11_reac_befa07c183d2933b267807b902bb56f8/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/framer-motion@12.24.11_reac_befa07c183d2933b267807b902bb56f8/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FadeInWhenVisible(param) {
    let { children, delay = 0.3 } = param;
    _s();
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeInWhenVisible.useEffect": ()=>{
            if (isInView) {
                controls.start("visible");
            }
        }
    }["FadeInWhenVisible.useEffect"], [
        controls,
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
_s(FadeInWhenVisible, "VZT9yWWS8pdArFQ0OA8soDLuINc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$24$2e$11_reac_befa07c183d2933b267807b902bb56f8$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FadeInWhenVisible;
var _c;
__turbopack_context__.k.register(_c, "FadeInWhenVisible");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projet-interne/y3-audit-conseils/app/hooks/use-page-image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePageImage",
    ()=>usePageImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/slider-context.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function usePageImage(imagePath) {
    _s();
    const { setCurrentImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlider"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePageImage.useEffect": ()=>{
            setCurrentImage(imagePath);
        }
    }["usePageImage.useEffect"], [
        imagePath,
        setCurrentImage
    ]);
}
_s(usePageImage, "H4baDpvfC0u9aCmn8Pphz35XwUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$slider$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlider"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$expert$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/expert-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$main$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/main-slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$experts$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/experts-carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/components/animations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$hooks$2f$use$2d$page$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projet-interne/y3-audit-conseils/app/hooks/use-page-image.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Base de données des associés
const partners = [
    {
        id: 1,
        name: "Georges Yao-Yao",
        position: "Associé Co-Fondateur",
        image: "/georges.PNG",
        slug: "georges-yaoyao",
        isPartner: true,
        description: [
            "Fort de plus de vingt années d’expérience en audit et en comptabilité, Georges apporte une expertise internationale remarquable, acquise notamment chez Deloitte et Grant Thornton. Son parcours l’a conduit des bureaux de Deloitte Global aux États-Unis (2007-2010) aux fonctions de direction au sein du groupe IPS (WA) et de Deloitte Afrique francophone.",
            "Spécialisé dans l’accompagnement de filiales de groupes internationaux et d’entreprises locales, Georges a développé une expertise sectorielle approfondie dans la finance, l’agro-industrie, les services, l’énergie, les médias et les télécommunications. Avant de co-fonder Y3 Audit & Conseils, il a contribué activement au développement de Grant Thornton Audit Côte d’Ivoire.",
            "Georges pilote nos missions d’audit et de conseil opérationnel, alliant rigueur technique et vision stratégique pour répondre aux enjeux de nos clients."
        ],
        contact: {
            email: "georges.yaoyao@ycubeac.com",
            phone: "+2250546006393",
            linkedin: "https://www.linkedin.com/in/georgesyaoyao/"
        }
    },
    {
        id: 2,
        name: "Yves Dodo",
        position: "Associé Co-Fondateur",
        image: "/Yvesss.jpg",
        slug: "yves-dodo",
        isPartner: true,
        description: [
            "Reconnu pour son professionnalisme et sa vision stratégique, Yves incarne l’excellence de l’expertise comptable en Côte d’Ivoire. Fort de plus de 17 années d’expérience, il accompagne les dirigeants d’entreprises dans leurs décisions financières avec rigueur, clarté et engagement. Après avoir débuté sa carrière en France, Yves a poursuivi son parcours en Côte d’Ivoire où il a occupé des postes à responsabilité au sein de cabinets internationaux prestigieux tels que Deloitte et Grant Thornton Audit CI .",
            "Cette double expérience, entre standards internationaux et réalités locales, lui confère une vision à 360° des enjeux économiques, comptables et fiscaux des entreprises opérant en Afrique. Yves intervient dans des secteurs variés — transport aérien, banque, BTP, services — et possède une maîtrise approfondie de la consolidation des comptes de groupes, de l'analyse comptable et des référentiels IFRS, SYSCOHADA et PCG.",
            "Son sens de l’analyse, sa précision technique et sa capacité à vulgariser les chiffres en font un partenaire stratégique pour les dirigeants qu’il accompagne. Convaincu que la comptabilité est bien plus qu’une obligation légale, Yves la considère comme un levier de pilotage et d’anticipation. Il met un point d’honneur à créer une relation de confiance avec ses clients, en leur apportant des conseils sur mesure, adaptés à leur environnement et à leurs ambitions"
        ],
        contact: {
            email: "yves.dodo@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/yves-dodo-966094150/"
        }
    }
];
// Base de données des experts
const experts = [
    {
        id: 3,
        name: "Christiane Guehi",
        position: "Senior Manager Expertise Comptable",
        image: "/christiane Guei.JPG",
        slug: "christiane-guehi",
        isPartner: false,
        bio: "Christiane Guehi est Manager chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
        description: [
            "Diplômée du Diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris, Christiane a rejoint Y3 Audit & Conseils en octobre 2024, apportant une solide expérience de 9 années acquises chez Deloitte Côte d'Ivoire et Sénégal.",
            "Spécialiste reconnue en expertise comptable, audit et commissariat aux comptes, elle pilote des missions diversifiées allant de l'audit légal et contractuel à la consolidation des comptes. Son expertise s'étend également à l'optimisation fiscale, ainsi qu'à la gestion financière et de la paie.",
            "Christiane conjugue rigueur technique et approche pragmatique pour délivrer à nos clients des solutions adaptées à leurs besoins opérationnels et réglementaires."
        ],
        contact: {
            email: "christiane.guehi@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/christiane-guehi-seoulou-5a1814135/"
        }
    },
    {
        id: 4,
        name: "Stéphane Gnahoua",
        position: " Senior Manager Expertise Comptable",
        image: "/stéphane GNAHOUA.JPG",
        slug: "stephane-gnahoua",
        isPartner: false,
        bio: "Stéphane Gnahoua est Manager chez Y3 Audit & Conseils. Il est basé à Abidjan.",
        description: [
            "Titulaire d'un Master 2 en Comptabilité, Contrôle et Audit, Stéphane enrichit notre équipe de ses 10 années d'expérience en expertise comptable, audit et conseil. Son parcours professionnel l'a mené chez Jean-Luc Ruelle puis Grant Thornton, où il a affiné son expertise.",
            "Stéphane maîtrise l'ensemble des dimensions de l'accompagnement d'entreprise : expertise comptable, audit, gestion organisationnelle et financière, ainsi que fiscalité. Cette polyvalence lui permet d'appréhender de manière globale les problématiques de nos clients et de proposer des solutions intégrées.",
            "Son approche méthodique et sa connaissance approfondie des enjeux sectoriels font de lui un interlocuteur de référence pour nos missions les plus complexes."
        ],
        contact: {
            email: "stephane.gnahoua@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/st%C3%A9phane-gnahoua-09a4451b3/"
        }
    },
    {
        id: 5,
        name: "Axelle Amani",
        position: " Senior Manager Audit",
        image: "/Axelle Amani.JPG",
        slug: "axelle-amani",
        isPartner: false,
        bio: "Axelle Amani est Manager Audit chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
        description: [
            "Diplômée du Diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris, Axelle apporte à notre équipe 8 années d'expérience dont 5 années passées chez Deloitte. Cette solide formation lui a permis de développer une expertise reconnue en audit, expertise comptable et conseil.",
            "Au sein de Y3 Audit & Conseils, Axelle se consacre principalement aux missions d'audit, où elle déploie sa rigueur méthodologique et sa capacité d'analyse pour garantir la qualité de nos interventions. Son parcours chez Deloitte lui confère une vision internationale des standards d'excellence que nous appliquons quotidiennement.",
            "Axelle représente la nouvelle génération de professionnalisme alliant formation de haut niveau et expérience opérationnelle solide."
        ],
        contact: {
            email: "axelle.amani@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/axelle-amani-25275592/"
        }
    },
    {
        id: 6,
        name: "Stéphanie Taki",
        position: "Manager Audit",
        image: "/stéphanie taki1.JPG",
        slug: "stephanie-taki",
        isPartner: false,
        bio: "Stéphanie Taki est Manager Conseil Fiscal chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
        description: [
            "Titulaire d'un MBA en Audit et Contrôle de Gestion du CESAG, Stéphanie enrichit notre équipe de ses 8 années chez PwC. Cette formation d'excellence lui a permis de développer une expertise complète en audit.",
            "Spécialisée dans l'évaluation des procédures de contrôle interne, la collecte et validation d'informations financières, ainsi que la préparation de livrables de qualité, Stéphanie maîtrise également la question de la relation client et l'encadrement d'équipes. Ces compétences transversales en font une collaboratrice polyvalente et autonome.",
            "Au sein de Y3 Audit & Conseils, elle concentre son expertise sur nos missions d'audit en apportant la rigueur et la méthodologie acquises dans un environnement international de premier plan."
        ],
        contact: {
            email: "stephanie.taki@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/stephanie-rebecca-taki-a16012108/"
        }
    },
    {
        id: 7,
        name: "Augustin Kpantché",
        position: "Manager Conseil Financier",
        image: "/Augustin.JPG",
        slug: "augustin-kpantche",
        isPartner: false,
        bio: "Augustin Kpantché est Expert Comptable Senior chez Y3 Audit & Conseils. Il est basé à Abidjan.",
        description: [
            "Titulaire d'un Master en Banque et Finance du CESAG de Dakar, Augustin apporte à Y3 Audit & Conseils plus de 10 années d'expérience dans l'univers financier. Son parcours l'a mené de l'analyse des risques à l'analyse financière, avant de diriger le département Banque d'Affaires d'une société de Gestion et d'intermédiation.",
            "Cette progression lui a permis de développer une expertise pointue en modélisation financière, valorisation d'entreprise, levée de fonds, fusions-acquisitions et élaboration de business plans. Sa vision stratégique et sa connaissance approfondie des mécanismes financiers font de lui un interlocuteur privilégié pour nos clients dans leurs projets de développement et de transformation.",
            "Augustin pilote nos missions de conseil financier avec la rigueur et l'expertise acquises au cœur des métiers de la finance, offrant à nos clients un accompagnement de haut niveau dans leurs décisions d'investissement."
        ],
        contact: {
            email: "augustin.kpantche@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/augustin-kpantche-6658a427/"
        }
    },
    {
        id: 8,
        name: "Revita Ouléi",
        position: "Manager Conseil Opérationnel",
        image: "/revita oule.JPG",
        slug: "revita-oulei",
        isPartner: false,
        bio: "Revita Ouléi est Manager Conseil Opérationnel chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
        description: [
            "Titulaire d'un Master en Audit & Contrôle de Gestion du CESAG, Revita apporte à notre équipe plus de 8 années d'expérience spécialisée dans l'environnement bancaire de l'UEMOA, acquise notamment chez PwC Abidjan.",
            "Son expertise s'est forgée à travers l'accompagnement de nombreux établissements financiers sur des projets stratégiques : automatisation des processus prudentiels, conformités LCB-FT et projets de transformations. Elle maîtrise parfaitement les dispositifs Bâle I et II, la conformité réglementaire, la cartographie des processus et des risques, ainsi que la gestion de projet.",
            "Cette spécialisation sectorielle unique permet à Revita d'apporter une valeur ajoutée par son expertise technique approfondie et sa connaissance spécifique à la zone UEMOA."
        ],
        contact: {
            email: "revita.oule@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/r%C3%A9vita-oul%C3%A9-20a663196/"
        }
    },
    {
        id: 9,
        name: "Isabella Beda",
        position: "Responsable Ressources Humaines",
        image: "/Isabella.JPG",
        slug: "isabella-beda",
        isPartner: false,
        bio: "Isabella Beda est responsable ressources humaines chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
        description: [
            "Forte d'une expertise de plus de 8 ans dans le domaine des ressources humaines, Isabella Beda est  Responsable des Ressources Humaines  de Y3 Audit & Conseils.",
            "Diplômée d'un Master Manager des Ressources Humaines du Pôle Paris Alternance, Isabella a construit son parcours professionnel autour de trois piliers fondamentaux : le recrutement stratégique, l'accompagnement managérial et le développement des talents.",
            "Son expérience diversifiée lui a permis d'évoluer au sein de structures variées, allant de l'intérim spécialisé aux services IT.",
            "Spécialiste du recrutement IT et du sourcing de profils en pénurie, Isabella a développé une expertise reconnue dans l'acquisition de talents, la gestion des carrières et la mise en œuvre de politiques RH adaptées aux enjeux des entreprises modernes. Elle a également piloté des projets structurants tels que l'amélioration du parcours d'intégration, la conception de plans de formation et le déploiement de processus RH agiles.",
            "Chez Y3 Audit & Conseils, Isabella met son savoir-faire au service du développement humain de l'entreprise, en accompagnant les équipes dans leur évolution et en garantissant une gestion RH de proximité, alignée sur les valeurs et les ambitions du cabinet."
        ],
        contact: {
            email: "isabella.beda@ycubeac.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/isabella-beda-659918142/?originalSubdomain=fr"
        }
    }
];
function TeamPage() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$hooks$2f$use$2d$page$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageImage"])('/équipement.webp');
    const teamSlides = [
        {
            id: 1,
            title: "Une équipe pluridisciplinaire",
            description: "Des experts à votre écoute pour répondre à tous vos besoins.",
            image: "/histoire1.jpg",
            buttonText: "Découvrir l'équipe",
            buttonLink: "/a-propos/notre-equipe",
            priority: true
        }
    ];
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [selectedExpert, setSelectedExpert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check URL for expert slug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamPage.useEffect": ()=>{
            const expertSlug = searchParams.get("expert");
            if (expertSlug) {
                const expert = [
                    ...partners,
                    ...experts
                ].find({
                    "TeamPage.useEffect.expert": (e)=>e.slug === expertSlug
                }["TeamPage.useEffect.expert"]);
                if (expert) {
                    setSelectedExpert(expert);
                    setIsModalOpen(true);
                }
            } else {
                setIsModalOpen(false);
            }
        }
    }["TeamPage.useEffect"], [
        searchParams
    ]);
    const handleExpertClick = (expert)=>{
        setSelectedExpert(expert);
        setIsModalOpen(true);
        const newUrl = "".concat(pathname, "?expert=").concat(expert.slug);
        window.history.pushState({
            path: newUrl
        }, "", newUrl);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
        window.history.pushState({
            path: pathname
        }, "", pathname);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen w-full overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full overflow-hidden relative pt-0 xs:pt-0 sm:pt-0 md:pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$main$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainSlider"], {
                    slides: teamSlides
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "team-section",
                className: "py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-2 xs:px-4 sm:px-6 md:px-8 max-w-7xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInWhenVisible"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pl-2 xs:pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-32 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#073E5D] mb-2 xs:mb-3 sm:mb-4 lg:mb-6 leading-tight",
                                    children: "Notre équipe"
                                }, void 0, false, {
                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 xs:w-16 sm:w-18 md:w-20 lg:w-24 h-1 bg-[#80C342] mb-3 xs:mb-4 sm:mb-6"
                                }, void 0, false, {
                                    fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInWhenVisible"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$experts$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertsCarousel"], {
                        experts: partners,
                        onExpertClick: handleExpertClick,
                        title: "Nos Associés"
                    }, void 0, false, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                    lineNumber: 261,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInWhenVisible"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$experts$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertsCarousel"], {
                        experts: experts,
                        onExpertClick: handleExpertClick,
                        title: "Nos Experts"
                    }, void 0, false, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                    lineNumber: 268,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "nos-valeurs",
                className: "py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$animations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInWhenVisible"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-2 xs:pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-32 mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#073E5D] mb-2 xs:mb-3 sm:mb-4 lg:mb-6 leading-tight",
                                        children: "Nos valeurs"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-1 bg-[#80C342]"
                                    }, void 0, false, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2",
                                                children: "Excellence"
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2",
                                                children: "Nous visons l'excellence dans tous nos services, en maintenant les plus hauts standards de qualité."
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2",
                                                children: "Probité"
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2",
                                                children: "Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles."
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2",
                                                children: "Partage"
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2",
                                                children: "Nous recherchons constamment de nouvelles solutions pour répondre aux défis de nos clients."
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-auto min-h-[120px] xs:min-h-[140px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base xs:text-lg sm:text-lg font-bold text-[#073E5D] text-center mb-1 xs:mb-2",
                                                children: "Innovation"
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xs:text-base sm:text-lg text-gray-600 text-center mb-2",
                                                children: "Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs."
                                            }, void 0, false, {
                                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                    lineNumber: 275,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$components$2f$expert$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertModal"], {
                expert: selectedExpert,
                isOpen: isModalOpen,
                onClose: handleCloseModal
            }, void 0, false, {
                fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projet-interne/y3-audit-conseils/app/a-propos/notre-equipe/page.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s(TeamPage, "acMStGPHnIYQc4ishobhYHvC47Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$app$2f$hooks$2f$use$2d$page$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageImage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$projet$2d$interne$2f$y3$2d$audit$2d$conseils$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TeamPage;
var _c;
__turbopack_context__.k.register(_c, "TeamPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projet-interne_y3-audit-conseils_ae8302cb._.js.map