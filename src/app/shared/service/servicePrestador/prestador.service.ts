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

  listarPrestador(): Observable<Prestador[]> {
    return this.httpClient.get<Prestador[]>(this.URL_PRESTADOR);
  }

  inserirPrestador(prestador: Prestador): Observable<Prestador> {
    return this.httpClient.post<Prestador>(this.URL_PRESTADOR, prestador);
  }
}
