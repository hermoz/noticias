import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology', ];
  noticias: Article[] = [];
  /*
  noticias: Article[] = [];
  */


  constructor( private noticiasService: NoticiasService ) {

  }

/**
 * Carga general de noticias donde desarrollamos un método para la carga de todas las noticias de todas las categorías
 * y otro independiente cuando se produce el camio de categoria y se controla el evento del ion segment en el que
 * se insertan las categorías en nuestro html
 */
  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias (this.categorias[0]);
  }

  /**
   * Desarrollamos el evento que llamamos en nuestro ion-segment para mostrar las noticias
   * según la categoría seleccionada
   */
  cambioCategoria( event) {
    console.log(event.detail.value);
    this.noticias=[];
    this.cargarNoticias(event.detail.value);

  }

  cargarNoticias( categoria: string ){
    // mandamos categoria recibida en el argumento
    this.noticiasService.getTopHeadlinesCategoria(categoria)
    .subscribe (resp => {
      console.log(resp);
      // con el operador spread (...) insertamos cada uno de forma independiente 
      this.noticias.push (...resp.articles);
    });
  }

}
