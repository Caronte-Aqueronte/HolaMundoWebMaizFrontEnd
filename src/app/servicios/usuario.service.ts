import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string =
    'http://localhost/MaizBackend/src/main/controllers/UsuarioControllers/';
  constructor(private http: HttpClient) {}

  public createUser(usuario: any): any {
    return this.http.post(`${this.url}CreateUser.php`, JSON.stringify(usuario));
  }
}
