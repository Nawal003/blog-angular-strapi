import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/system/services/auth.service';
import { ConnexionService } from 'src/app/system/services/connexion.service';

import { isDevMode } from '@angular/core';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
/**
   * Objet connecté au HTML pour récupérer les valeurs saisies dans les champs du formulaire d'authentification
   */
 donneesID = {
  login: '',
  mdp: ''
};
/**
 * Non implémenté, permettra de gérer les erreurs
 */
authErreur: boolean=true;
/**
 * Page de connexion
 * @param router On récupère la route
 * @param authService Service qui s'occupe de vérifier la validité de l'authentification
 * @param connexion Stockage du statut de l'authentification avec gestion du sessionStorage
 */
constructor(private router: Router, public authService: AuthService, public connexion: ConnexionService) {
}

ngOnInit() {
}

/**
 * Utiliser Strapi comme back-end
 */
authentification() {
  // Test si nous sommes en développement ou non
  if (isDevMode()) {
    this.authService.enregistre(this.donneesID);
  } else {
    // Simulation cf.
    this.authService.enregistre(this.donneesID);
    // Enregistrement sur un serveur Strapi
    // this.authService.enregistreStrapi({
    //   identifier: this.donneesID.login,
    //   password: this.donneesID.mdp
    // });
  }
}
}


