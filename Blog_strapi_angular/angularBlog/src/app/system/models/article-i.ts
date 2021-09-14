import { CategorieI } from './categorie-i';
import { CommentaireI } from './commentaire-i';

export interface ArticleI{
    id?: any;
    titre: string;
    img: string;
    contenu: string;
    published_at?: Date;
    created_at?: Date;
    updated_at?: Date;
    statut: boolean;
    commentaires?:CommentaireI[];
    categorie:CategorieI;
}
