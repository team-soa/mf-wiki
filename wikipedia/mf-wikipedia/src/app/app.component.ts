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
  
  constructor(private cookie: CookieService, private serviciosWikipedoa: ServiciosWikipediaService){}
  
  artistaWiki: Wikipedia = new Wikipedia; 
  ngOnInit(): void {
    this.artistaWiki.artista = this.cookie.get('artista')
    console.log(this.artistaWiki.artista)
  }
}
