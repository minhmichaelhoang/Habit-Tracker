import  { RotateCw } from 'lucide-react'

interface HabitRepeatProps {
    repeat: number
}

export function HabitRepeat({ repeat }: HabitRepeatProps) {
    return (
        <div className="flex gap-2">
            <RotateCw size={20} />
            <p>every {repeat > 1 ? `${repeat} days` : 'day'}</p>
        </div>    
    )
}