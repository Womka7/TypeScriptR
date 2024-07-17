
export interface RequestLoginBooks{
    email:string,
    password:string
}
export interface ResponseLoginBooks{
    message:string,
    data: Record<string, string>
}


export interface IListBooks {
    message: string;
    data:    Datum[];
}

export interface Datum {
    id:              string;
    title:           string;
    author:          string;
    description:     string;
    summary:         string;
    publicationDate: Date | null;
    createdBy:       string;
    updatedBy:       null;
    deletedBy:       null;
    createdAt:       Date;
    updatedAt:       Date;
    deletedAt:       null;
    files:           any[];
}
