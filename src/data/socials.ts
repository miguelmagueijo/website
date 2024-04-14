import type { SimpleIcon } from "simple-icons";
import { siFacebook, siLinkedin, siGithub, siX } from "simple-icons";

export interface HyperlinkInformation {
    url: string;
    name: string;
    display_text: string;
    hyper_title: string;
    icon: SimpleIcon;
}

export type SocialsHyperlinks = {
    facebook: HyperlinkInformation,
    linkedIn: HyperlinkInformation,
    github: HyperlinkInformation,
    x: HyperlinkInformation,
}

export const SocialsHyperlinks = {
    x: {
        url: "https://x.com/",
        name: "X",
        display_text: "@miguelmagueijo",
        hyper_title: "Miguel Magueijo X profile",
        icon: siX,
    },
    linkedIn: {
        url: "https://www.linkedin.com/in/miguel-magueijo/",
        name: "LinkedIn",
        display_text: "/miguelmagueijo",
        hyper_title: "Miguel Magueijo LinkedIn profile",
        icon: siLinkedin,
    },
    facebook: {
        url: "https://www.facebook.com/profile.php?id=100077211735856",
        name: "Facebook",
        display_text: "Miguel Magueijo",
        hyper_title: "Miguel Magueijo Facebook profile",
        icon: siFacebook,
    },
    github: {
        url: "https://github.com/miguelmagueijo",
        name: "GitHub",
        display_text: "/miguelmagueijo",
        hyper_title: "Miguel Magueijo LinkedIn profile",
        icon: siGithub,
    },
} as const;