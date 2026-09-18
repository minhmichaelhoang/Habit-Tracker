interface CardTitleProps {
    title: string
    color: string
}

export function CardTitle({ title, color }: CardTitleProps) {
    return (
        <h2 className={`text-lg font-bold`} style={{color}}>{title}</h2>
    )
}