import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comentario} from "../../model/comentario";

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  //Url do banco Json para os comentários;

  URL_Comment = "";

  constructor(private httpClient: HttpClient) {
  }

  listarComentarios(): Observable<Comentario[]>{
    return this.httpClient.get<Comentario[]>("");
  }

  inserirComentario(comentario: Comentario): Observable<Comentario> {
    return this.httpClient.post<Comentario>("", comentario);
  }
}
