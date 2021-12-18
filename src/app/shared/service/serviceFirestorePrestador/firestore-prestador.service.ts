import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import { Prestador } from '../../model/prestador';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestorePrestadorService {

  colecaoPrestadores: AngularFirestoreCollection<Prestador>;
  NOME_COLECAO = 'comentarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoPrestadores = afs.collection(this.NOME_COLECAO);
  }

  listarPrestadores(): Observable<Prestador[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoPrestadores.valueChanges({idField: 'id'});
  }

  inserirPrestador(prestador: Prestador): Observable<object> {
    // Object.assign({}, comentario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoPrestadores.add(Object.assign({}, prestador)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoPrestadores.doc(id).delete());
  }

}

