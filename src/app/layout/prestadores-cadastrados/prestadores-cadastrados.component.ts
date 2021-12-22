import { Component, OnInit } from '@angular/core';
import {Prestador} from "../../shared/model/prestador";
import { MatTableDataSource } from "@angular/material/table";
import {PrestadorService} from "../../shared/service/servicePrestador/prestador.service";

@Component({
  selector: 'app-prestadores-cadastrados',
  templateUrl: './prestadores-cadastrados.component.html',
  styleUrls: ['./prestadores-cadastrados.component.scss']
})
export class PrestadoresCadastradosComponent implements OnInit {

  dataSource: MatTableDataSource<Prestador>;
  mostrarColunas = ['nome', 'endereco', 'horarioDisponibilidade'];

  constructor(private prestadorService: PrestadorService) { }

  ngOnInit(): void {
    this.prestadorService.listarPrestadores().subscribe(
      prest => this.dataSource = new MatTableDataSource<Prestador>(prest)
    );
  }

  filtrar(value: string) {
    this.dataSource.filter = value.trim().toLowerCase()
  }
}
