import { EllipsisVertical } from 'lucide-react'

interface SettingsButtonProps {
}

export function SettingsButton({ }: SettingsButtonProps) {
    return (
        <button>
            <EllipsisVertical size={20} />
        </button>
    )
}

//TODO: Funktionalität ergänzen