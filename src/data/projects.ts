export interface ProjectInfo {
    isActive: boolean,
    isArchived: boolean,
    imgUrl: string,
    imgAlt: string,
    imgTitle: string,
    name: string,
    smallDesc: string,
    link: string | null,
    githubRepo: string | null,
    year: number
}

export const projects: Array<ProjectInfo> = [
    {
        isActive: false,
        isArchived: true,
        imgUrl: "/Projects/projectmanager.png",
        imgAlt: "Project Manager Logo",
        imgTitle: "Project Manager",
        name: "Project Mananger",
        smallDesc: "Final professional course project to manage projects",
        link: null,
        githubRepo: "https://github.com/miguelmagueijo/ProjectManager",
        year: 2019
    },
    {
        isActive: false,
        isArchived: true,
        imgUrl: "/Projects/popcornlist.png",
        imgAlt: "PopCornList Logo",
        imgTitle: "PopCornList",
        name: "PopCornList",
        smallDesc: "School project to track your movies and TV shows status",
        link: null,
        githubRepo: "https://github.com/miguelmagueijo/DW-PopCornList",
        year: 2020
    },
    {
        isActive: false,
        isArchived: true,
        imgUrl: "/Projects/reallearn.svg",
        imgAlt: "Real Learn Logo",
        imgTitle: "Real Learn",
        name: "Real Learn",
        smallDesc: "Group school project inspired by moodle",
        link: null,
        githubRepo: "https://github.com/miguelmagueijo/Real-Learn",
        year: 2021
    }
];