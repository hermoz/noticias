import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // control de login de usuario
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) { 
    /**
     * nos devuelve el estado del login y devuelve el usuario 
     * en caso de que esté logado la propiedad isLogged será igual al usuario 
     * en el caso que no haya usuario logado devuelve null
     */
    afAuth.authState.subscribe (user => (this.isLogged = user));

  }
    /**
     * Método login para user que recibe dicho parámetro
     * si está todo correcto devuelve 
     */
    async onLogin (user: User){
      try {
        // indicamos inicio sesion con email y password 
        return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      } catch (error){
        console.log('Error en login', error);
      }

    }
    // método registro de usuarios 
    async onRegister(user: User){
      try{
        return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

      } catch(error){
        console.log('Error en el registro', error);
      }
    }
 
}
