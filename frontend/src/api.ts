import type { Habit, HabitDraft } from "./domain/Habit"

export async function createHabit(data: HabitDraft): Promise<Habit> {
    const response = await fetch('api/habits', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
		throw new Error(await extractErrorMessage(response, "Error while creating a Habit"));
	}
	return await response.json();
}

export async function fetchHabits(): Promise<Habit[]> {
	const response = await fetch('api/habits')
	if (!response.ok) {
		throw new Error(await extractErrorMessage(response, "Error while fetching Habit"));
	}
	return response.json();
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
