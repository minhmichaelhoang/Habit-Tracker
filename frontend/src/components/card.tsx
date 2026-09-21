import { CardTitle } from './cardTitle.tsx'
import { HabitRepeat } from './habitRepeat.tsx'
import { HeatMap } from './heatMap.tsx'
import { SettingsButton } from './settingsButton.tsx'


interface CardProps {
    title: string
    description: string
    color?: string
    repeat?: number
}

    export function Card({ title, description, color = 'var(--color-primary)', repeat = 1 }: CardProps) {
        return (
        <div className="border-3 rounded-lg p-4 text-primary">
            <div className="flex items-center justify-between">
                <CardTitle title={title} color={color} />
                <div className="flex gap-2">
                  <HabitRepeat repeat={repeat} />
                  <SettingsButton/>
                </div>
            </div>
            <p>{description}</p>
            <HeatMap/>
        </div>
    )
}