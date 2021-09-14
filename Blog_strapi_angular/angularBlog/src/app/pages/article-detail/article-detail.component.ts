import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentaireI } from 'src/app/system/models/commentaire-i';
import { ArticlesService } from 'src/app/system/services/articles.service';
import { environment } from 'src/environments/environment';
import { ArticleI } from '../../system/models/article-i';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  articleId: number = 0;
  article: ArticleI = <ArticleI>{};
  commentaire: CommentaireI = <CommentaireI>{};

  // donnees$!:Subscription;



  constructor(public articlesServ: ArticlesService, private routeParams: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.articleId;

    this.routeParams.params.subscribe(params => {
      this.articleId = +params['id'];
      console.log(this.articleId);
      this.article = this.articlesServ.getArticleDetail(this.articleId);

    });



  }
  ajouterCommentaire(data: CommentaireI) {
    this.http.post(environment.apiURL + '/commentaires', data).subscribe((response) => {
      console.log(response);

    });
    // console.log(data);

  }

}
