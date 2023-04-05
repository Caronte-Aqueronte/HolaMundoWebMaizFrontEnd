import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  public contadorLikes: number;//contador de los likes obtenidos
  public constructor() {
    this.contadorLikes = 0;
  }
  public ngOnInit(): void {
    //mandamos a traer el numero de likes
  }
}
