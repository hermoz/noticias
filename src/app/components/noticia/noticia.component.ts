import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';


import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  // incluimos en el contructor action-sheet asociado al depliegue de acciones del botón de las noticias para compartir 
  constructor(private actionSheetCtrl: ActionSheetController, private socialSharing: SocialSharing) { }

  ngOnInit() {}

  /**
   * No es necesario recibir el url como argumento para la carga de la noticia 
   * porque se recibe en @Input() noticia: Article;
   */
  abrirNoticia (){
    console.log('Noticia', this.noticia.url);

  }

  /**
   * Método para botón que muestre action-sheet de las noticias
   * se necesita el await por lo que se define un método asíncrono
     */
  async launchMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{ 
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          // implementamos en el botón compartir share mediante uso de social media
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,'',
            this.noticia.url
          );
        } 
      }]
    });
    await actionSheet.present();
  }


}
