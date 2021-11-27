import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_CLIENTE = "";

  constructor(private httpClient: HttpClient) {
  }

  listarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTE);
  }

  inserirCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.URL_CLIENTE, cliente);
  }
}
