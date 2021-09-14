import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'connexion', component: ConnexionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
