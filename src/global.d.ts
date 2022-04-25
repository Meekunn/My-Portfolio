interface IRoutes {
    path: string;
    exact: boolean;
    component: any;
    name: string;
    props?: any;
}

interface IDetails {
    id: number;
    role: string;
    office: string;
    link: string;
    date: string;
    li1: string;
    li2: string;
    li3?: string;
}