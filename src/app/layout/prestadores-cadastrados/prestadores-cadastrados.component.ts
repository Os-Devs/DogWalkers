import { Component, OnInit } from '@angular/core';
import {Prestador} from "../../shared/model/prestador";
import { MatTableDataSource } from "@angular/material/table";
import {PrestadorService} from "../../shared/service/servicePrestador/prestador.service";
import {Cliente} from "../../shared/model/cliente";

@Component({
  selector: 'app-prestadores-cadastrados',
  templateUrl: './prestadores-cadastrados.component.html',
  styleUrls: ['./prestadores-cadastrados.component.scss']
})
export class PrestadoresCadastradosComponent implements OnInit {

  dataSource: MatTableDataSource<Prestador>;
  mostrarColunas = ['nome', 'endereco', 'horarioDisponibilidade', 'opcoes'];

  constructor(private prestadorService: PrestadorService) { }

  ngOnInit(): void {
    this.prestadorService.listarPrestadores().subscribe(
      prest => this.dataSource = new MatTableDataSource<Prestador>(prest)
    );
  }

  filtrar(value: string) {
    this.dataSource.filter = value.trim().toLowerCase()
  }

  apagarPrestador(prestador: Prestador) {
    this.prestadorService.removerPrestador(prestador.id).subscribe();
    const referenceComent = this.dataSource.data.indexOf(prestador);
    if (referenceComent > -1) {
      this.dataSource.data.splice(referenceComent, 1);
      this.dataSource = new MatTableDataSource<Prestador>(this.dataSource.data);
    }
  }

  editarPrestador(prestador: Prestador) {
    
  }
}
