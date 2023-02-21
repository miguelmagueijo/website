import type { Icons } from "../../svgs"

export interface ContactLink {
    href: string,
    text: string,
    title: string,
    icon: typeof Icons[keyof typeof Icons]
}

export interface PageLink {
    href: string,
    text: string,
}