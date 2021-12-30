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

  inserirComentario(email: string, comentario: string, elementMail: HTMLInputElement, elementComment: HTMLTextAreaElement) {
    if (email && comentario) {
      let comment = new Comentario(email, comentario);
      this.comentarios.push(comment);
      this.comentarioService.inserirComentario(comment).subscribe();
    }

    elementMail.value = "";
    elementComment.value = "";
  }

  deletarComentario(comentario: Comentario) {
    this.comentarioService.removerComentario(comentario.id).subscribe();
    const referenceComent = this.comentarios.indexOf(comentario);
    if (referenceComent > -1) {
      this.comentarios.splice(referenceComent, 1);
    }
  }

  editarComentario(comentario: Comentario, elementMail: HTMLInputElement, elementComment: HTMLTextAreaElement) {

    if (elementMail && elementComment) {
      comentario.email = elementMail.value;
      comentario.conteudo = elementComment.value;

      this.comentarioService.atualizarComentario(comentario).subscribe();
    }

  }
}
