import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CategorieI } from 'src/app/system/models/categorie-i';
import { ArticlesService } from 'src/app/system/services/articles.service';
import { ArticleI } from '../../system/models/article-i';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  bool: boolean = false;
  articles: ArticleI[] = [];
  debut = 0;
  fin = 4;
  ecart = 4;
  tri: string = '';
  triNom: string = '';



  constructor(public articlesServ: ArticlesService, private route: Router) { }

  ngOnInit(): void {
    this.articles = this.articlesServ.articles$.getValue();
    this.articlesServ.articles$.subscribe(data => {

      this.articles = data;
    })


  }
  logCategories(g: CategorieI) {
    // console.log(g);


  }
  logTri() {
    console.log((this.tri));

  }
  /**
   * Aller sur la page du détail des news en transmettant l'index de la news à afficher
   * @param articlesId Index de la news à afficher. Pourrait être remplacée par l'_id de la news
   */
  goArticles(articlesId: number) {
    this.route.navigate(['/articles/', articlesId]);
  }

}
