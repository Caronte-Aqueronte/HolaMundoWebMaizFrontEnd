import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../clases/comentario';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css'],
})
export class ComentarioComponent implements OnInit {
  @Input() datosComentario!: Comentario;
  public comentarioText!: String; //texto dle comentario a mostrar
  public fecha!: String; //fecha del comentairo a mostrar

  constructor() {


  }
  ngOnInit(): void {
   //inicializamos las variables
   this.comentarioText = this.datosComentario.comentario;
   this.fecha = this.datosComentario.fecha;
  }
}
