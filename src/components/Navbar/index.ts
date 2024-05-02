export const TabsIDs = {
    Home: "home",
    Fis: "fis",
    Contact: "contact"
} as const;

export type TabsIDsKeys = typeof TabsIDs[keyof typeof TabsIDs]

export { default as Navbar } from "./Navbar.astro";