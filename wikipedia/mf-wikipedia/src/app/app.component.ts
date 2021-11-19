import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Wikipedia } from 'src/Clases/wikipedia';
import { ServiciosWikipediaService } from 'src/Servicios/servicios-wikipedia.service';

@Component({
  selector: 'mf-wikipedia',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-wikipedia';
  
  constructor(private cookie: CookieService, private serviciosWikipedia: ServiciosWikipediaService){}
  
  artistaWiki: Wikipedia = new Wikipedia; 
  ngOnInit(): void {
    this.artistaWiki.artista = this.cookie.get('artista')
    this.serviciosWikipedia.pedirDatosParaWikikpedia(this.artistaWiki.artista).subscribe(respuesta => 
      {this.artistaWiki = respuesta
      console.log(this.artistaWiki)})
  }
}
