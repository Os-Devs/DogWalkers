import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login-validacao',
  templateUrl: './login-validacao.component.html',
  styleUrls: ['./login-validacao.component.scss']
})
export class LoginValidacaoComponent implements OnInit {

  hide1 = true;

  validationsLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  limparLogin(elementLogin: HTMLInputElement, elementSenha: HTMLInputElement) {

    elementLogin.value = '';
    elementSenha.value = '';
  }
}
