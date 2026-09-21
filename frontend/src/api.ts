export const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function createHabit(data: Habit): Promise<> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
		throw new Error(await extractErrorMessage(response, "Fehler beim Erstellen des Habits"));
	}
}

async function extractErrorMessage(response: Response, fallback: string): Promise<string> {
	try {
		const body = await response.json();
		if (body?.message) {
			return body.message;
		}
	} catch {
		// kein JSON-Body vorhanden - Fallback-Meldung verwenden
	}
	return `${fallback} (Status ${response.status})`;
}
