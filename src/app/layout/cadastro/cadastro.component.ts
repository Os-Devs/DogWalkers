import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Cliente } from "../../shared/model/cliente";
import { PrestadorServico } from "../../shared/model/prestadorServico";
import { ClienteService } from "../../shared/service/serviceCliente/cliente.service";
import { PrestadorService } from "../../shared/service/servicePrestador/prestador.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  type: number;
  clientes = new Array<Cliente>();
  prestadores = new Array<PrestadorServico>();
  hide = true;

  validations: FormGroup;

  constructor(private clienteService: ClienteService, private prestadorService: PrestadorService,
              private formBuilder: FormBuilder) {
    this.validations = formBuilder.group({
      nome: [
        '', Validators.required
      ],
      email: [
          '', [Validators.required, Validators.email]
      ],
      cpf: [
        '', [Validators.required, Validators.pattern("\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}")]
      ],
      dataNasc: [
        '', Validators.required
      ],
      telefone: [
        '', [Validators.required, Validators.pattern('(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})')]
      ]
    });
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      client => this.clientes = client
    );
    this.prestadorService.listarPrestador().subscribe(
      prestador => this.prestadores = prestador
    );
  }

  inserirPrestador() {

  }
}
