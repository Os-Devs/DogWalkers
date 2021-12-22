import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_CLIENTE = "http://localhost:8080/clientes";

  constructor(private httpClient: HttpClient) { }

  listarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTE);
  }

  inserirCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.URL_CLIENTE, cliente);
  }

  removerCliente(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_CLIENTE}/${id}`);
  }

  atualizarCliente(client: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.URL_CLIENTE}/${client.id}`, client);
  }
}
