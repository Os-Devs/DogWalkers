import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Cliente } from "../../shared/model/cliente";
import { Prestador } from "../../shared/model/prestador";
import {FirestoreClienteService} from "../../shared/service/serviceFirestoreCliente/firestore-cliente.service";
import {FirestorePrestadorService} from "../../shared/service/serviceFirestorePrestador/firestore-prestador.service";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  type: number;
  clientes = new Array<Cliente>();
  prestadores = new Array<Prestador>();
  hide1 = true;
  hide2 = true;

  validationsPrest: FormGroup;
  validationsCli: FormGroup;

  constructor(private clienteService: FirestoreClienteService, private prestadorService: FirestorePrestadorService,
              private formBuilder: FormBuilder) {
    this.validationsPrest = formBuilder.group({
      nome: [
        '', Validators.required
      ],
      email: [
        '', [Validators.required, Validators.email]
      ],
      cpf: [
        '', [Validators.required, Validators.minLength(11)]
      ],
      dataNasc: [
        '', Validators.required
      ],
      telefone: [
        '', [Validators.required, Validators.pattern("\\([0-9]{2}\\)[\\s][0-9]{5}-[0-9]{4}")]
      ],
      rua: [
        '', Validators.required
      ],
      bairro: [
        '', Validators.required
      ],
      numero: [
        '', Validators.required
      ],
      cep: [
        '', [Validators.required, Validators.pattern("^[0-9]{8}$")]
      ],
      senha: [
        '', [Validators.required, Validators.minLength(6)]
      ],
      horario: [
        '', [Validators.required, Validators.pattern("[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}")]
      ]
    });

    this.validationsCli = formBuilder.group({
      nome: [
        '', Validators.required
      ],
      email: [
        '', [Validators.required, Validators.email]
      ],
      cpf: [
        '', [Validators.required, Validators.minLength(11)]
      ],
      dataNasc: [
        '', Validators.required
      ],
      telefone: [
        '', [Validators.required, Validators.pattern("\\([0-9]{2}\\)[\\s][0-9]{5}-[0-9]{4}")]
      ],
      rua: [
        '', Validators.required
      ],
      bairro: [
        '', Validators.required
      ],
      numero: [
        '', Validators.required
      ],
      cep: [
        '', [Validators.required, Validators.pattern("^[0-9]{8}$")]
      ],
      senha: [
        '', [Validators.required, Validators.minLength(6)]
      ],
      horario: [
        '', [Validators.required, Validators.pattern("[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}")]
      ]
    });
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      client => this.clientes = client
    );
    this.prestadorService.listarPrestadores().subscribe(
      prestador => this.prestadores = prestador
    );
  }

  inserirPrestador(nome: HTMLInputElement, cpf: HTMLInputElement, dataNasc: HTMLInputElement,
                   tell: HTMLInputElement, rua: HTMLInputElement, bairro: HTMLInputElement,
                   num: HTMLInputElement, cep: HTMLInputElement, email: HTMLInputElement,
                   senha: HTMLInputElement, horario: HTMLInputElement) {

    let prest = new Prestador(nome.value, cpf.value, dataNasc.value, horario.value,
      tell.value, senha.value, rua.value, bairro.value, cep.value, Number.parseInt(num.value));


  }

  inserirCliente() {

  }
}
