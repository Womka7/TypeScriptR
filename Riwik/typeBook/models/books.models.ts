
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

export interface RequestCreateBook {
    title:           string;
    author:          string;
    description:     string;
    summary:         string;
    publicationDate: Date;
}

export interface ResponseCreateBook {
    message: string;
    data: Datum;
}

export interface ResponseUpdateBook {
    message: string;
    data: Datum;
}

export interface ResponseDeleteBook {
    message: string;
    data: { id: string };
}