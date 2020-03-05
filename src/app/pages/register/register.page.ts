import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.class';
import { AuthService } from 'src/app/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User ();
  constructor(private authSvc: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  async onRegister (){

    /**
     * esperamos el resultado de llamar a nuestro servicio 
     * pasándole el user como parámetro
     */
    const user = await this.authSvc.onRegister(this.user);
    /**
     *  en el caso de que todo funcione de forma correcta se redirecciona 
     * al usuario a la página principal
     */
    if(user){
      console.log('Registro correcto');
      this.router.navigateByUrl('/tabs/tab1');
    }
  }

}
