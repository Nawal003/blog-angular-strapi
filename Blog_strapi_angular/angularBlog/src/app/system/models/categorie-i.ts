import { ArticleI } from "./article-i";

export interface CategorieI {
    id?:number;
    nom:string;
    articles:ArticleI;
}
