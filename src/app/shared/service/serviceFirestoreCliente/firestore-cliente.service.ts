import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import { Cliente } from '../../model/cliente';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreClienteService {

  colecaoClientes: AngularFirestoreCollection<Cliente>;
  NOME_COLECAO = 'comentarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoClientes = afs.collection(this.NOME_COLECAO);
  }

  listarClientes(): Observable<Cliente[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoClientes.valueChanges({idField: 'id'});
  }

  inserirCliente(cliente: Cliente): Observable<object> {
    // Object.assign({}, comentario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoClientes.add(Object.assign({}, cliente)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoClientes.doc(id).delete());
  }

}

