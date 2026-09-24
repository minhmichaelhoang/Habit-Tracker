import  { SquareDashedPlus } from 'lucide-react'

interface addButtonProps {
    onClick: () => void
}

export function AddButton({onClick}: addButtonProps) {
    return (
        <button
            onClick={onClick}
            className="text-primary hover:text-secondary cursor-pointer transition-colors duration-300"
        >
            <SquareDashedPlus/>
        </button>
    )
}