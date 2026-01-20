export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return Response.json(
                { error: "Adresse email manquante." },
                { status: 400 }
            );
        }

        // Appeler le backend Express
        const backendUrl = process.env.BACKEND_URL || "http://localhost:5000";
        const res = await fetch(`${backendUrl}/send-newsletter`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
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
