import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Prestador } from "../../model/prestador";

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  URL_PRESTADOR = "http://localhost:8080/prestadores";

  constructor(private httpClient: HttpClient) { }

  listarPrestadores(): Observable<Prestador[]> {
    return this.httpClient.get<Prestador[]>(this.URL_PRESTADOR);
  }

  inserirPrestador(prestador: Prestador): Observable<Prestador> {
    return this.httpClient.post<Prestador>(this.URL_PRESTADOR, prestador);
  }

  removerPrestador(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_PRESTADOR}/${id}`);
  }

  atualizarPrestador(prestador: Prestador): Observable<Prestador> {
    return this.httpClient.put<Prestador>(`${this.URL_PRESTADOR}/${prestador.id}`, prestador);
  }
}
