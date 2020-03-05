import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaComponent
  ],

  // exportación básica para poder usarlo
  // en otro módulos
  exports: [
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
