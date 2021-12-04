import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Comentario } from "../../shared/model/comentario";
import { FirestoreComentarioService } from "../../shared/service/serviceFirestoreComentario/firestore-comentario.service";

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

  constructor(private comentarioService: FirestoreComentarioService, private formBuilder: FormBuilder) {
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

  inserirComentario(id: string, email: string, comentario: string, elementMail: HTMLInputElement, elementComment: HTMLTextAreaElement) {
    if (email && comentario) {
      let comment = new Comentario(id ,email, comentario);
      this.comentarios.push(comment);
      this.comentarioService.inserirComentario(comment).subscribe();
    }

    elementMail.value = "";
    elementComment.value = "";
  }

}
