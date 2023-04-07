import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private path = "http://localhost/MaizBackend/src/main/controllers/LikeControllers/";

  constructor(private http: HttpClient) { }

  public newLike(): Observable<any> {
    return this.http.post(`${this.path}NuevoLikeController.php`, null);
  }

  public mostrarLikes(): Observable<any> {
    return this.http.post(`${this.path}MostarLikeController.php`, null);
  }
}
