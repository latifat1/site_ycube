export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Récupérer les données
        const subject = formData.get("subject") as string;
        const text = formData.get("text") as string;
        const html = formData.get("html") as string;
        const candidatEmail = formData.get("candidatEmail") as string;
        const candidatNom = formData.get("candidatNom") as string;
        const cv = formData.get("cv") as File | null;

        if (!subject || !text || !candidatEmail || !candidatNom) {
            return Response.json(
                { error: "Tous les champs requis ne sont pas remplis." },
                { status: 400 }
            );
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
            body: backendFormData,
        });

        const data = await res.json();

        if (!res.ok) {
            return Response.json(data, { status: res.status });
        }

        return Response.json(data, { status: 200 });
    } catch (error) {
        console.error("Erreur:", error);
        return Response.json(
            { error: error instanceof Error ? error.message : "Erreur serveur" },
            { status: 500 }
        );
    }
}
