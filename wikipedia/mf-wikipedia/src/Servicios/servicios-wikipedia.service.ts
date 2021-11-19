import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiciosWikipediaService {
  URL = "http://localhost:4004/artist";

  constructor(private http: HttpClient) { }

  public pedirDatosParaWikikpedia(nombreArstista: string){
    return this.http.get(this.URL+ '/' + nombreArstista)

  }
}
