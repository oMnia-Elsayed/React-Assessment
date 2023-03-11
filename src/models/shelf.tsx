import { BookModel } from "./book";

export interface ShelfModel {
    title: string;
    books: BookModel[];
};