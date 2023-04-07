import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  aIntro(): void {
    document?.getElementById('intro')?.scrollIntoView();
  }

  aPrimeraLeyenda(): void {
    document?.getElementById('primeraLeyenda')?.scrollIntoView();
  }

  aSegundaLeyenda(): void {
    document?.getElementById('segundaLeyenda')?.scrollIntoView();
  }

  aTerceraLeyenda(): void {
    document?.getElementById('terceraLeyenda')?.scrollIntoView();
  }

  aCuartaLeyenda(): void {
    document?.getElementById('cuartaLeyenda')?.scrollIntoView();
  }

  aComentarios(): void {
    document?.getElementById('comentarios')?.scrollIntoView();
  }
}
