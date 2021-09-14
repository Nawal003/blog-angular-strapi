import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleI } from '../models/article-i';
import { CommentaireI } from '../models/commentaire-i';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  articles: Array<ArticleI>;
  articles$: BehaviorSubject<ArticleI[]> = new BehaviorSubject<ArticleI[]>([]);

  constructor(private http: HttpClient) {
    this.articles = [];
    this.getArticles();
  }
  
  /**
   * Fetch Article par Id
   * @param id 
   * @return
   */
  getArticles() {
    this.http.get<Array<ArticleI>>(environment.apiURL + '/articles').subscribe(data => {
      this.articles = data;
      this.articles$.next(data);
      console.log(data);
      
    },
      erreur => {
        console.log('erreur de chargement de données', erreur);

      });
    // fetch(`${environment.apiURL}/articles`)
    // .then((data) => data.json())
    // .then((result)=>{
    //   this.articles=result;
    //   console.log("les articles", this.articles);
  }
  /**
  * Méthode d'identification d'un article spécifique à afficher. Prend en compte la valeur de ID
  * @param id index ou _id d'un article à récupérer
  */
  getArticleDetail(id: number | string): ArticleI {
    let a: ArticleI = <ArticleI>{};
    for (let i in this.articles) {
      console.log(i);
      if (this.articles[i]['id'] == id) {
        console.log("Objet retourné", i);
        return this.articles[i];
      }
    }
    return a;
  }


}
