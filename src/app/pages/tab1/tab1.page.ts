import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

// implementamos aquí Ng On Init para que se realice la petición al servicio cuando se accede a la página
export class Tab1Page implements OnInit   {

  /**
   * Creamos un objeto para recorrer las noticias junto con la importación de la interfaz
   */
  noticias: Article[] = [];

  // inyectamos el servicio de las noticias
  constructor( private noticiasService: NoticiasService){

  }

  /**
   * Para la obtención de la información no definimos aquí el tipo sino que 
   * se define y así centraliza en el servicio
   * De esta forma la lógica se ubica en el servicio y aquí al necesitar la respuesta directamente nos indica
   * los tributos.
   */


  ngOnInit() {
    this.noticiasService.getTopHeadlines()
    .subscribe (resp => {
      console.log('noticias', resp);
      // con spread ... traemos e insertamos cada elemento de forma independiente en el array
      this.noticias.push(...resp.articles);
    });

  }

}
