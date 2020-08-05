export class Book {
    id: number;
    title: string;
    author: string;
    type: BookType;
    year: Date;
    pagesAmount: number;
}

export enum BookType {
    Novel = 0,
    Historical = 1,
    Fiction = 2,
    Poetry = 3
}
