import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PrestadorServico } from "../../model/prestadorServico";

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  URL_PRESTADOR = "http://localhost:3000/prestadores";

  constructor(private httpClient: HttpClient) { }

  listarPrestador(): Observable<PrestadorServico[]> {
    return this.httpClient.get<PrestadorServico[]>(this.URL_PRESTADOR);
  }

  inserirPrestador(prestador: PrestadorServico): Observable<PrestadorServico> {
    return this.httpClient.post<PrestadorServico>(this.URL_PRESTADOR, prestador);
  }
}
