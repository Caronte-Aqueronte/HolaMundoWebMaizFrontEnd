import { Component, OnInit } from '@angular/core';
import { LikeService } from '../servicios/like.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  public contadorLikes: number; //contador de los likes obtenidos
  public constructor(private likeService: LikeService) {
    this.contadorLikes = 0;
  }
  public ngOnInit(): void {
    //mandamos a traer el numero de likes
    this.mostarLikes();
  }

  public like(): void {
    this.likeService.newLike().subscribe((respuesta: any) => {
      if (respuesta.banderaLike) {
        this.contadorLikes++;
      }
    });
  }

  public mostarLikes(): void {
    this.likeService.mostrarLikes().subscribe((respuesta: any) => {
     this.contadorLikes = respuesta.numLikes;
    });
  }
}
