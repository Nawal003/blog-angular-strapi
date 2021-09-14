import { Pipe, PipeTransform } from '@angular/core';
import { ArticleI } from '../models/article-i';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(articlesTab: Array<ArticleI>, filtre: string): Array<ArticleI> {
    if (!articlesTab) return [];
    if (!filtre) return articlesTab;

    return articlesTab.filter(g => g.categorie.nom == filtre);
  }

}
@Pipe({
  name: 'categorieNom'
})
export class NomsPipe implements PipeTransform {

  transform(articlesTab: Array<ArticleI>, filtre: string): Array<ArticleI> {
    filtre =filtre.toLocaleLowerCase();
    if (!articlesTab) return [];
    if (!filtre) return articlesTab;

    return articlesTab.filter(g => g.categorie.nom.indexOf(filtre) != -1);
  }

}
