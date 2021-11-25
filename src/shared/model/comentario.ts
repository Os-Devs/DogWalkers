export class Comentario {
  private _email: string;
  private _comentario: string;

  constructor(email: string, comentario: string) {
    this._email = email;
    this._comentario = comentario;
  }

  get getEmail(): string {
    return this._email;
  }

  set setEmail(newEmail: string) {
    this._email = newEmail;
  }

  get getComentario(): string {
    return this._comentario;
  }

  set setComentaario(newComentario: string) {
    this._comentario = newComentario;
  }
}
