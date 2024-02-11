export interface EducationInfo {
    imgUrl: string,
    imgAlt: string,
    imgTitle: string,
    schoolName: string,
    courseName: string,
    degree: string,
    start: string,
    end: string
}

export const studies: Array<EducationInfo> = [
    {
        imgUrl: "/3rdParty/AEF.png",
        imgAlt: "Agrupamento de Escolas do Fundão Logo",
        imgTitle: "Agrupamento de Escolas do Fundão",
        schoolName: "Agrupamento de Escolas do Fundão",
        courseName: "Management and Programming of Information Systems",
        degree: "Professional Course",
        start: "Sep 2016",
        end: "Jul 2019"
    },
    {
        imgUrl: "/3rdParty/ipcb_estcb.svg",
        imgAlt: "IPCB - Escola Superior de Tecnologia Logo",
        imgTitle: "IPCB - Escola Superior de Tecnologia",
        schoolName: "Instituto Politécnico de Castelo Branco",
        courseName: "Information Systems Technology and Programming",
        degree: "Higher Professional Technical Course",
        start: "Sep 2019",
        end: "Jul 2021"
    },
    {
        imgUrl: "/3rdParty/ipcb_estcb.svg",
        imgAlt: "IPCB - Escola Superior de Tecnologia Logo",
        imgTitle: "IPCB - Escola Superior de Tecnologia",
        schoolName: "Instituto Politécnico de Castelo Branco",
        courseName: "Computer Science and Multimedia",
        degree: "Bachelor",
        start: "Sep 2021",
        end: ""
    }
];