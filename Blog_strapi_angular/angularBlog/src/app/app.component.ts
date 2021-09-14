import { Component, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  // title: string = 'My Blog';
  logo: string = 'assets/images/Logo2.png';
   /**
   * Composant de base initié dans le bootstrap du module principal
   * @param titre Titre de l'application affiché dans le navigateur
   * @param metas Les métadonnées de l'application
   */
    // constructor(private titre:Title, metas:Meta) {
    //   titre.setTitle('My Blog - quelques articles');
    //   metas.addTag({ name: 'author', content: 'N / Nawal Z' });
    // }
}
