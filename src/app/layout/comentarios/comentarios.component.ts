import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Comentario } from "../../shared/model/comentario";
import { ComentarioService } from "../../shared/service/serviceComentario/comentario.service";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  comentarios = new Array<Comentario>();

  validations: FormGroup;

  // email = new FormControl('', [Validators.required,
  //   Validators.email]);

  constructor(private comentarioService: ComentarioService, private formBuilder: FormBuilder) {
    this.validations = this.formBuilder.group({
      email: [
        '', [
          Validators.required, Validators.email
        ]
      ],
      comentarios: [
        '', Validators.required
      ]
    });
  }

  ngOnInit(): void {
    this.comentarioService.listarComentarios().subscribe(
      comments => this.comentarios = comments
    );
  }

  inserirComentario(elementMail: HTMLInputElement, elementComment: HTMLTextAreaElement) {
    if (elementMail.value && elementComment.value) {
      let comment = new Comentario(elementMail.value, elementComment.value);
      this.comentarios.push(comment);
      this.comentarioService.inserirComentario(comment).subscribe();
    }

    elementMail.value = "";
    elementComment.value = "";
  }

}
