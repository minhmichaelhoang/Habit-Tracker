import { ArrowUp } from 'lucide-react'
import { type ChangeEvent, type SubmitEvent, useState } from "react";
import type { HabitDraft } from "../../domain/Habit.ts";
import {createHabit} from "../../api.ts";

// Extra Typen, da der Input von repeat ein string ist und erst später in number umgewandelt wird.
type HabitFormValues = Omit<HabitDraft, "repeat"> & { repeat: string }

interface HabitCreatorProps {
    onSubmit: () => void
}

export function HabitCreator({onSubmit}: HabitCreatorProps) {
    const [habit, setHabit] = useState<HabitFormValues>({title: "", description: "", repeat: "", color: ""})
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!checkTitle() || !checkDescription() || !checkRepeat() || !checkColor()) return;
        else setErrorMessage("");

        const result = createHabit({
            title: habit.title,
            description: habit.description,
            repeat: Number(habit.repeat),
            color: habit.color,
        }) // type HabitDraft
        // TODO etwas mit dem Rückgabewert anstellen. Es beinhaltet Habit mit einer ID, die zum auflisten notwendig ist

        if (result) setHabit({title: "", description: "", repeat: "", color: ""})
        else setErrorMessage("Habit could not be created successfully")

        onSubmit()
    }

    function checkTitle(): boolean {
        if (!habit.title || habit.title.length > 50) {
            setErrorMessage("Title must have between 1 and 50 characters.");
            return false
        }
        else return true
    }

    function checkDescription(): boolean {
        if (!habit.description || habit.description.length > 100) {
            setErrorMessage("Description must have between 1 and 100 characters.");
            return false
        }
        else return true
    }

    function checkRepeat(): boolean {
        if (!habit.repeat || isNaN(Number(habit.repeat)) && habit.repeat.trim() !== '') {
            setErrorMessage("Repeat must have between 1");
            return false
        }
        else return true
    }

    function checkColor(): boolean {
        if (!/^#[0-9a-fA-F]{6}$/.test(habit.color)) {
            setErrorMessage("Color must be in hexagonal format");
            return false
        }
        else return true
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        // name ist der Key und value der Wert, ein Handler der alles übersichtlich hält, der Redundanz vermeidet
        setHabit(prev => ({...prev, [name]: value}))
    }

    return (
        <>
            <form
                onSubmit={ handleSubmit }
                className="border-3 rounded-lg p-4 text-primary flex flex-col gap-2 w-full">
                <input
                    type={"text"}
                    className={"text-lg font-bold"}
                    placeholder={"Title"}
                    value={habit.title}
                    name={"title"}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    className={"text-sm"}
                    placeholder={"Description"}
                    value={habit.description}
                    name={"description"}
                    onChange={handleChange}
                />
                <input
                    type={"number"}
                    className="text-sm"
                    placeholder={"Repeat"}
                    value={habit.repeat}
                    name={"repeat"}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    className="text-sm"
                    placeholder={"Color"}
                    value={habit.color}
                    name={"color"}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="hover:text-secondary cursor-pointer transition-colors duration-300 self-end">
                    <ArrowUp/>
                </button>
            </form>
            {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
        </>
    )
}