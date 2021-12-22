import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Cliente } from "../../shared/model/cliente";
import { ClienteService } from "../../shared/service/serviceCliente/cliente.service";
import {ComentarioService} from "../../shared/service/serviceComentario/comentario.service";
import {Comentario} from "../../shared/model/comentario";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login-validacao',
  templateUrl: './login-validacao.component.html',
  styleUrls: ['./login-validacao.component.scss']
})
export class LoginValidacaoComponent implements OnInit {

  hide1 = true;

  validationsLogin: FormGroup;

  constructor(private cliente: Cliente ,private clienteService: ClienteService, private router: Router,private formBuilder: FormBuilder) {

    this.validationsLogin = formBuilder.group({
      email: [
        '', [Validators.required, Validators.email]
      ],
      senha: [
        '', [Validators.required, Validators.minLength(6)]
      ]
    });
  }


  ngOnInit(): void {
  }


  validarLogin(email: string, senha: string) {
    console.log('mudou')
    //this.clienteService.pesquisarClientePorEmail(email).subscribe();
    //this.router.navigate(['perfil', id])
  }

  limparLogin(elementLogin: HTMLInputElement, elementSenha: HTMLInputElement) {

    elementLogin.value = '';
    elementSenha.value = '';
  }
}
