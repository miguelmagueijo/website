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
    githubApi: string | null,
    year: number
}

const PERSONAL_REPO_URL = "https://github.com/miguelmagueijo";
const PERSONAL_REPO_API_URL = "https://api.github.com/repos/miguelmagueijo";

export const projects: Array<ProjectInfo> = [
    {
        isActive: false,
        isArchived: true,
        imgUrl: "/Projects/projectmanager.png",
        imgAlt: "Project Manager Logo",
        imgTitle: "Project Manager",
        name: "Project Manager",
        smallDesc: "Final professional course project to manage projects",
        link: null,
        githubRepo: `${PERSONAL_REPO_URL}/ProjectManager`,
        githubApi: `${PERSONAL_REPO_API_URL}/ProjectManager`,
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
        githubRepo: `${PERSONAL_REPO_URL}/DW-PopCornList`,
        githubApi: `${PERSONAL_REPO_API_URL}/DW-PopCornList`,
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
        githubRepo: `${PERSONAL_REPO_URL}/Real-Learn`,
        githubApi: `${PERSONAL_REPO_API_URL}/Real-Learn`,
        year: 2021
    },
    {
        isActive: true,
        isArchived: false,
        imgUrl: "/Projects/croprecommendation.webp",
        imgAlt: "Crop Recommendation Logo",
        imgTitle: "Crop Recommendation",
        name: "Crop Recommendation",
        smallDesc: "Final project of my bachelor degree that focus on ML models to recommend crops",
        link: "https://cr.miguelmagueijo.pt",
        githubRepo: `${PERSONAL_REPO_URL}/CropRecommendation`,
        githubApi: `${PERSONAL_REPO_API_URL}/CropRecommendation`,
        year: 2023
    },
];