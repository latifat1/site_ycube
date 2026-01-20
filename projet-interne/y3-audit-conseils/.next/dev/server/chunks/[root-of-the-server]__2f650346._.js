module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/site_ycube/projet-interne/y3-audit-conseils/app/api/send-email-with-attachment/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
async function POST(request) {
    try {
        const formData = await request.formData();
        // Récupérer les données
        const subject = formData.get("subject");
        const text = formData.get("text");
        const html = formData.get("html");
        const candidatEmail = formData.get("candidatEmail");
        const candidatNom = formData.get("candidatNom");
        const cv = formData.get("cv");
        if (!subject || !text || !candidatEmail || !candidatNom) {
            return Response.json({
                error: "Tous les champs requis ne sont pas remplis."
            }, {
                status: 400
            });
        }
        // Créer une FormData pour envoyer au backend
        const backendFormData = new FormData();
        backendFormData.append("subject", subject);
        backendFormData.append("text", text);
        backendFormData.append("html", html || text);
        backendFormData.append("candidatEmail", candidatEmail);
        backendFormData.append("candidatNom", candidatNom);
        if (cv) {
            backendFormData.append("cv", cv);
        }
        // Appeler le backend Express
        const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
        const res = await fetch(`${backendUrl}/send-email-with-attachment`, {
            method: "POST",
            body: backendFormData
        });
        const data = await res.json();
        if (!res.ok) {
            return Response.json(data, {
                status: res.status
            });
        }
        return Response.json(data, {
            status: 200
        });
    } catch (error) {
        console.error("Erreur:", error);
        return Response.json({
            error: error instanceof Error ? error.message : "Erreur serveur"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f650346._.js.map