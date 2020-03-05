import { Injectable } from '@angular/core';
// importación de módulo para la inyección de cliente
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

/**
 * Creación de constantes para mejorar el código
 */
const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

/**
 * Documentación oficial de Ionic donde definimos los headers
 * que enviaremos a cada una de las peticiones
 */
const headers = new HttpHeaders({
 'X-Api-key' : apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // Inyectamos el cliente del http en el constructor
  constructor( private http: HttpClient ) { }

  /**
   * Usamos <T> GENÉRICOS indicando recibiremos un tipo
   * que coincidirá con la respuesta recibida
   * lo mismo que recibimos al ejecutar query lo devuelve en return
   */
  private ejecutarQuery <T> (query: string){

  query = apiUrl + query;
  return this.http.get <T> (query, {headers});
  }
  // con nuestra API seleccionada queremos obtener el topheadlines de modo que
  // Método para la obtención de los top headlines

  getTopHeadlines() {

    /**
     * Get de tipo RespuestaTopHeadlines (definido en nuestra interfaz)
     * Este método get nos devuelve un observable de ese tipo
     */
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
  }
  // return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=cf17985b54894f31bcc149d5edf92399`);
  

   /**
    * Desarrollo de apartado 2 mediante búsqueda en navbar por categorías
    * y reusamos lo propio de la url junto con el apartado
    */

    getTopHeadlinesCategoria (categoria: string){
     // return this.http.get(`http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=cf17985b54894f31bcc149d5edf92399`)

     // el uso de ejecutarQuery sirve para añadir la parte necesaria en la ejecución de la URL
     // con <RespuestaTopHeadlines> indicamos el tipo de la respuesta
     return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}`);
    }


}
