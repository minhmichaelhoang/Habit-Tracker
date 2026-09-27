export interface Habit {
    title: string;
    description: string;
    repeat: number;
    color: string;
    id: string;
}

export type HabitDraft = Omit<Habit, "id">;