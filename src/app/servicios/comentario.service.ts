import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../clases/comentario';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private path =
    'http://localhost/MaizBackend/src/main/controllers/ComentariosControllers/';
  constructor(private http: HttpClient) {}


  public nuevoComentario(comentario:Comentario): Observable<any> {
    return this.http.post(`${this.path}NuevoComentarioController.php`, JSON.stringify(comentario));
  }

  public mostrarComentarios(): Observable<Array<Comentario>> {
    return this.http.post<Array<Comentario>>(`${this.path}MostrarComentario.php`, null);
  }
}
