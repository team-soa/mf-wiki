import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Wikipedia } from 'src/Clases/wikipedia';


@Injectable({
  providedIn: 'root'
})
export class ServiciosWikipediaService {
  URL = "http://localhost:4004/artist";

  constructor(private http: HttpClient) { }

  public pedirDatosParaWikikpedia(nombreArstista: string){
    return this.http.get<Wikipedia>(this.URL+ '/' + nombreArstista)

  }
}
