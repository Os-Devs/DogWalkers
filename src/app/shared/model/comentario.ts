export class Comentario {
  public id: number;
  public email: string;
  public conteudo: string;

  constructor(email: string, comentario: string) {
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
