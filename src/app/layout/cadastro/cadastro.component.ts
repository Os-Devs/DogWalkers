import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cliente } from "../../shared/model/cliente";
import { Prestador } from "../../shared/model/prestador";
import { ClienteService } from "../../shared/service/serviceCliente/cliente.service";
import { PrestadorService } from "../../shared/service/servicePrestador/prestador.service";
import { MatSnackBar } from "@angular/material/snack-bar";

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

  constructor(private clienteService: ClienteService,
              private prestadorService: PrestadorService,
              private snackBar: MatSnackBar,
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  inserirPrestador(nome: HTMLInputElement, cpf: HTMLInputElement, dataNasc: HTMLInputElement,
                   tell: HTMLInputElement, rua: HTMLInputElement, bairro: HTMLInputElement,
                   num: HTMLInputElement, cep: HTMLInputElement, email: HTMLInputElement,
                   senha: HTMLInputElement, horario: HTMLInputElement) {

    let arrayendereco: string[] = [rua.value, bairro.value, cep.value, num.value];
    let endereco = arrayendereco.join(' ')

    let prest = new Prestador(nome.value, cpf.value, dataNasc.value, tell.value, email.value, senha.value, endereco, horario.value);

    this.prestadorService.inserirPrestador(prest).subscribe();
    this.prestadores.push(prest);

    this.openSnackBar(nome.value + ' cadastrado, informações do Prestador armazenadas.', 'OK');

    nome.value = "";
    cpf.value = "";
    dataNasc.value = "";
    horario.value = "";
    tell.value = "";
    senha.value = "";
    rua.value = "";
    bairro.value = "";
    cep.value = "";
    num.value = "";
    email.value = "";

  }

  inserirCliente(nome: HTMLInputElement, cpf: HTMLInputElement, dataNasc: HTMLInputElement,
                 tell: HTMLInputElement, rua: HTMLInputElement, bairro: HTMLInputElement,
                 num: HTMLInputElement, cep: HTMLInputElement, email: HTMLInputElement,
                 senha: HTMLInputElement, nomeDog: HTMLInputElement, racaDog: HTMLInputElement,
                 pesoDog: HTMLInputElement, porteDog: HTMLSelectElement) {

    let arrayendereco: string[] = [rua.value, bairro.value, cep.value, num.value];
    let endereco = arrayendereco.join(' ');

    let arraycachorro: string[] = [nomeDog.value, pesoDog.value, porteDog.options[porteDog.selectedIndex].value, racaDog.value];
    let cachorro = arraycachorro.join(' ');

    let client = new Cliente(nome.value, cpf.value, dataNasc.value, tell.value, email.value, senha.value, endereco, cachorro);

    this.clienteService.inserirCliente(client).subscribe();

    this.clientes.push(client);
    this.openSnackBar(nome.value + ' cadastrado, informações do Dono de Pet armazenadas.', 'OK');

    nome.value = "";
    cpf.value = "";
    dataNasc.value = "";
    tell.value = "";
    email.value = "";
    senha.value = "";
    rua.value = "";
    bairro.value = "";
    cep.value = "";
    num.value = "";

    nomeDog.value = "";
    pesoDog.value = "";
    porteDog.value = "";
    racaDog.value = "";
  }
}
