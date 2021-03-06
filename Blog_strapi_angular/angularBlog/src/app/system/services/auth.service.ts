import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from './connexion.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
       * Gérer les échanges Http lors d'une authentification d'un internaute
       * @param http Une instance de HttpClient pour les appels Ajax
       * @param connexion Instance du service ConnexionService qui regroupe les objets et méthodes liés aux authentifications
      */
  constructor(private http: HttpClient, private connexion: ConnexionService) {
    // this.connexion.connecte = this.connexion.recupereConnexion();
  }
  /**
   * Exemple de méthode utilisable pour gérer l'authentification avec un serveur distant
   * @param login Login à transmettre au serveur distant
   * @param mdp Mot de passe à transmettre au serveur distant
   */
  enregistre(o: object) {
    this.connexion.connecte = true;
    this.connexion.token = 'pipeautoken';
  }
  /**
   * Authentifier un utilisateur
   * @param o Paramètres d'authentification envoyés à Strapi
   */
  // enregistreStrapi(o: object) {
  //   this.http.post('http://localhost:1337/auth/local', o).subscribe(
  //     data => {
  //       console.log(data);
  //       // Gestion des paramètres d'authentification depuis strapi
  //       if (data ["jwt"]) {
  //         this.connexion.connecte = true;
  //         this.connexion.token = data["jwt"];
  //       }
  //     }
  //   )

  // }
}


