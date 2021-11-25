import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Comentario } from "../../../shared/model/comentario";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  comentarios = new Array<Comentario>();

  email = new FormControl('', [Validators.required,
    Validators.email]);

  constructor() {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return "Preencha um valor ao campo"
    }

    return this.email.hasError('email') ? "Email inválido" : "";
  }

  ngOnInit(): void {
  }

  inserirComentario() {

  }

  listarComentarios() {

  }

}
