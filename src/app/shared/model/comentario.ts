export class Comentario {
  public id?: string;
  public email?: string;
  public comentario?: string;

  constructor(id: string, email: string, comentario: string) {
    this.id = id;
    this.email = email;
    this.conteudo = comentario;
  }

  // get getEmail(): string {
  //   return this.email;
  // }
  //
  // set setEmail(newEmail: string) {
  //   this.email = newEmail;
  // }
  //
  // get getComentario(): string {
  //   return this.comentario;
  // }
  //
  // set setComentario(newComentario: string) {
  //   this.comentario = newComentario;
  // }
}
