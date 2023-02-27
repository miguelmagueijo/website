export interface JobInfo {
    imgUrl: string,
    imgAlt: string,
    imgTitle: string,
    jobName: string,
    companyName: string,
    positionName: string,
    start: string,
    end: string
}

export const jobs: Array<JobInfo> = [
    {
        imgUrl: "/3rdParty/CommunitiesComunicacoes.png",
        imgAlt: "Communities - Comunicações, Lda Logo",
        imgTitle: "Communities - Comunicações, Lda",
        jobName: "Full-stack Web Developer",
        companyName: "Communities - Comunicações, Lda",
        positionName: "Curricular internship",
        start: "Mar 2018",
        end: "Jul 2018"
    },
    {
        imgUrl: "/3rdParty/Capgemini.jpg",
        imgAlt: "Capgemini Engineering Logo",
        imgTitle: "Capgemini Engineering",
        jobName: "Full-stack Web Developer",
        companyName: "Capgemini Engineering",
        positionName: "Curricular internship",
        start: "Mar 2021",
        end: "Jul 2021"
    }
];