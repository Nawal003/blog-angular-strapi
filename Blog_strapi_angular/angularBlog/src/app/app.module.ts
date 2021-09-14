import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr, 'fr');
import { LOCALE_ID } from "@angular/core";
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticlesService } from './system/services/articles.service';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesPipe, NomsPipe } from './system/filter/categories.pipe';
import { ConnexionService } from './system/services/connexion.service';
import { AuthService } from './system/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticlesComponent,
    ConnexionComponent,
    AccueilComponent,
    ArticleDetailComponent,
    CategoriesPipe,
    NomsPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule, 
    MatFormFieldModule
    


  ],
  providers: [ArticlesService, { provide: LOCALE_ID, useValue: "fr-FR" }, ConnexionService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
