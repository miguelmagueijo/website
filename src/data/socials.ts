export interface HyperlinkInformation {
    url: string;
    name: string;
    display_text: string;
    hyper_title: string;
    iconName: string;
}

export type SocialsHyperlinks = {
    facebook: HyperlinkInformation,
    linkedIn: HyperlinkInformation,
    github: HyperlinkInformation,
    x: HyperlinkInformation,
}

export const SocialsHyperlinks: SocialsHyperlinks = {
    x: {
        url: "https://x.com/miguelmagueijo",
        name: "X",
        display_text: "@miguelmagueijo",
        hyper_title: "Miguel Magueijo X profile",
        iconName: "ri:twitter-x-line",
    },
    linkedIn: {
        url: "https://www.linkedin.com/in/miguel-magueijo/",
        name: "LinkedIn",
        display_text: "/miguelmagueijo",
        hyper_title: "Miguel Magueijo LinkedIn profile",
        iconName: "ri:linkedin-fill",
    },
    facebook: {
        url: "https://www.facebook.com/profile.php?id=100077211735856",
        name: "Facebook",
        display_text: "Miguel Magueijo",
        hyper_title: "Miguel Magueijo Facebook profile",
        iconName: "ri:facebook-circle-fill",
    },
    github: {
        url: "https://github.com/miguelmagueijo",
        name: "GitHub",
        display_text: "/miguelmagueijo",
        hyper_title: "Miguel Magueijo LinkedIn profile",
        iconName: "ri:github-fill",
    },
} as const;