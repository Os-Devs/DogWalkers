import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Comentario } from "../../model/comentario";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  URL_COMENTARIO = "http://localhost:8080/comentarios";

  constructor(private httpClient: HttpClient) {
  }

  listarComentarios(): Observable<Comentario[]>{
    return this.httpClient.get<Comentario[]>(this.URL_COMENTARIO);
  }

  inserirComentario(comentario: Comentario): Observable<Comentario> {
    return this.httpClient.post<Comentario>(this.URL_COMENTARIO, comentario);
  }

  removerComentario(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_COMENTARIO}/${id}`);
  }

  atualizarComentario(comentario: Comentario): Observable<Comentario> {
    return this.httpClient.put<Comentario>(`${this.URL_COMENTARIO}/${comentario.id}`, comentario);
  }
}
