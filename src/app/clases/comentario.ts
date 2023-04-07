export class Comentario {
  public comentario: String;
  public fecha: String;
  constructor(comentario: String, fecha: String) {
    this.comentario = comentario;
    this.fecha = fecha;
  }

  public getComentario(): String {
    return this.comentario;
  }

  public getFecha(): String {
    return this.fecha;
  }
}
