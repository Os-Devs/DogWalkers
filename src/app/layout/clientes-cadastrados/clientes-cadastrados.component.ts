import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../shared/model/cliente";
import { ClienteService } from "../../shared/service/serviceCliente/cliente.service";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-clientes-cadastrados',
  templateUrl: './clientes-cadastrados.component.html',
  styleUrls: ['./clientes-cadastrados.component.scss']
})
export class ClientesCadastradosComponent implements OnInit {
  dataSource: MatTableDataSource<Cliente>;
  mostrarColunas = ['nome', 'endereco', 'cachorro'];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      cli => this.dataSource = new MatTableDataSource<Cliente>(cli)
    );
  }

  filtrar(value: string) {
    this.dataSource.filter = value.trim().toLowerCase()
  }

}
