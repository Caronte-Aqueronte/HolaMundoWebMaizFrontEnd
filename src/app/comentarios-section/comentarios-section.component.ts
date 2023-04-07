import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../servicios/comentario.service';
import { Comentario } from '../clases/comentario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios-section',
  templateUrl: './comentarios-section.component.html',
  styleUrls: ['./comentarios-section.component.css'],
})
export class ComentariosSectionComponent implements OnInit {

  public comentarios!: Array<any>;
  public formComentario: FormGroup;

  constructor(
    private comentarioService: ComentarioService,
    private formBuilder: FormBuilder
  ) {
    this.comentarioService
    .mostrarComentarios()
    .subscribe((comentariosResultado: Array<Comentario>) => {
      this.comentarios = comentariosResultado;
      console.log(this.comentarios)
    });
    //se dan validaciones a los campos de crear un comentario
    this.formComentario = this.formBuilder.group({
      comentario: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  public ngOnInit(): void {

  }

  /**
   * Ustuliza el metodo mostrarComentarios() de ComentarioService para mandar a traer todos los comentarios ralizados
   * , iguala el array de los comentarios al enviado por el backend
   */
  public mostrarComentarios(): void {
    this.comentarioService
      .mostrarComentarios()
      .subscribe((comentariosResultado: Array<Comentario>) => {
        this.comentarios = comentariosResultado;
      });
  }

  public nuevoComentario(): void {
    const textoComentario = this.formComentario.value['comentario'];
    const nuevoComentario = new Comentario(textoComentario, '');

    this.comentarioService
      .nuevoComentario(nuevoComentario)
      .subscribe((resultado: any) => {
          this.mostrarComentarios();
          this.formComentario.controls["comentario"].setValue("");
      });
  }

  /**
   * Retorna el componente "comentario" del formulario
   */
  get comentario() {
    return this.formComentario.get('comentario');
  }
}
