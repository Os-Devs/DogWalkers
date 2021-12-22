import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Endereco } from "../../model/endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  URL_ENDERECO = "http://localhost:8080/enderecos";

  constructor(private httpClient: HttpClient) { }

  listarEnderecos(): Observable<Endereco[]> {
    return this.httpClient.get<Endereco[]>(this.URL_ENDERECO);
  }

  inserirEndereco(endereco: Endereco): Observable<Endereco> {
    return this.httpClient.post<Endereco>(this.URL_ENDERECO, endereco);
  }
}
