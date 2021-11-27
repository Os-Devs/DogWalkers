import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) {
  }

  listarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>("");
  }
}
