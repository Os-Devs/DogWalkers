import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Comentario } from "../../shared/model/comentario";
import {ComentarioService} from "../../shared/service/serviceComentario/comentario.service";


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  comentarios = new Array<Comentario>();

  email = new FormControl('', [Validators.required,
    Validators.email]);

  constructor(private comentarioService: ComentarioService) {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return "Preencha um valor ao campo"
    }

    return this.email.hasError('email') ? "Email inválido" : "";
  }

  ngOnInit(): void {
    this.comentarioService.listarComentarios().subscribe(
      comments => this.comentarios = comments
    );
  }

  inserirComentario() {

  }

}
