export async function POST(request: Request) {
    try {
        const { to, subject, text, html } = await request.json();

        if (!to || !subject || !text) {
            return Response.json(
                { error: "Données manquantes pour le rendez-vous" },
                { status: 400 }
            );
        }

        // Appeler le backend Express
        const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
        const res = await fetch(`${backendUrl}/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ to, subject, text, html }),
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
