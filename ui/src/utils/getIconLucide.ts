import { Calendar, LucideIcon, PartyPopper, Trophy } from "lucide-react";

const icons: Record<string, LucideIcon>= {
    ["PartyPopper"]: PartyPopper,
    ["Trophy"]: Trophy,
    ["Calendar"]: Calendar,
}

export default function getIconLucide(icon: string): LucideIcon {
    if(!(icon in icons)) return PartyPopper;

    return icons[icon]
}