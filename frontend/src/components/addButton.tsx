import  { SquareDashedPlus } from 'lucide-react'

interface addButtonProps {

}

export function AddButton({ }: addButtonProps) {
    return (
        <button className="text-primary hover:text-secondary cursor-pointer transition-colors duration-300">
            <SquareDashedPlus/> 
        </button>
    )
}