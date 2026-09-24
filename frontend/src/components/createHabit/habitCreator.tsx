import { ArrowUp } from 'lucide-react'

interface HabitCreatorProps {
    onSubmit: () => void
}

export function HabitCreator({onSubmit}: HabitCreatorProps) {

    function handleSubmit() {
        onSubmit()
    }

    return (
        <form className="border-3 rounded-lg p-4 text-primary">
            <input type="text" className="text-lg font-bold" placeholder={"Title"}/>
            <input type={"text"} className="text-sm" placeholder={"Description"}/>
            <input type={"number"} className="text-sm" placeholder={"Repeat"}/>
            <input type={"text"} className="text-sm" placeholder={"Color"}/>
            <button type="submit" className="hover:text-secondary cursor-pointer transition-colors duration-300" onClick={handleSubmit}>
                <ArrowUp/>
            </button>
        </form>
    )
}