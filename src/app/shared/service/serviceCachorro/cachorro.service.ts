import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cachorro} from "../../model/cachorro";

@Injectable({
  providedIn: 'root'
})
export class CachorroService {

  URL_CACHORRO = "http://localhost:8080/cachorros";

  constructor(private httpClient : HttpClient) { }

  listarCachorros(): Observable<Cachorro[]> {
    return this.httpClient.get<Cachorro[]>(this.URL_CACHORRO);
  }

  inserirCachorro(dog: Cachorro): Observable<Cachorro> {
    return this.httpClient.post<Cachorro>(this.URL_CACHORRO, dog);
  }

  removerCachorro(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_CACHORRO}/${id}`);
  }

  atualizarCachorro(dog: Cachorro): Observable<Cachorro> {
    return this.httpClient.put<Cachorro>(`${this.URL_CACHORRO}/${dog.id}`, dog);
  }
}
