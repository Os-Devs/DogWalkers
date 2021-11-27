export class Comentario {

  private email: string;
  private comentario: string;

  constructor(email: string, comentario: string) {
    this.email = email;
    this.comentario = comentario;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(newEmail: string) {
    this.email = newEmail;
  }

  get getComentario(): string {
    return this.comentario;
  }

  set setComentario(newComentario: string) {
    this.comentario = newComentario;
  }
}
