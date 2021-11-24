import { Cachorro } from "./cachorro";
import { Endereco } from "./endereco";

export class Cliente {
  private _nome: string;
  private _cpf: string;
  private _dataNasc: Date;
  private _telefone: number;
  private _senha: string;
  private _endereco: Endereco;
  protected _cachorros: Array<Cachorro>;

  constructor(nome: string, cpf: string, nasc: Date, telefone: number,senha: string,
              rua: string, bairro: string, cep: string, numero: number) {
    this._nome = nome;
    this._cpf = cpf;
    this._dataNasc = nasc;
    this._telefone = telefone;
    this._senha = senha;
    this._cachorros = new Array<Cachorro>();
    this._endereco = new Endereco(rua, bairro, cep, numero);
  }

  get getNome(): string {
    return this._nome;
  }

  set setNome(newNome: string) {
    this._nome = newNome;
  }

  get getCpf(): string {
    return this._cpf;
  }

  set setCpf(newCpf: string) {
    this._cpf = newCpf;
  }

  get getDataNasc(): Date {
    return this._dataNasc;
  }

  set setDataNasc(newDate: Date) {
    this._dataNasc = newDate;
  }

  get getTelefone(): number {
    return this._telefone;
  }

  set setTelefone(newTelefone: number) {
    this._telefone = newTelefone;
  }

  get getSenha(): string {
    return this._senha;
  }

  set setSenha(newSenha: string) {
    this._senha = newSenha;
  }

  get getEndereco(): Endereco {
    return this._endereco;
  }

  set setEndereco(newEndereco: Endereco) {
    this._endereco = newEndereco;
  }

  idade(date: Date): number {
    let idade: number;
    let dataAtual = new Date();

    idade = dataAtual.getFullYear() - date.getFullYear();

    if (dataAtual.getMonth() < date.getMonth() || dataAtual.getMonth() == date.getMonth() &&
    dataAtual.getDay() < date.getDay()) {
      idade--;
    }

    return idade;
  }

  get getCachorros(): Array<Cachorro> {
    return this._cachorros;
  }

  addCachorro(cachorro: Cachorro) {
    this._cachorros.push(cachorro);
  }

  removerCachorro(cachorro: Cachorro) {
    this._cachorros.find(
      remover => {
        if (remover === cachorro) {
          const indexRemover = this._cachorros.indexOf(remover);
          if (indexRemover > -1) {
            this._cachorros.splice(indexRemover, 1);
          }
        }
      }
    );
  }

  toString(): string {
    let output: string;

    output = `Nome: ${this.getNome}
CPF: ${this.getCpf}
Idade: ${this.idade(this._dataNasc)}
Telefone: ${this.getTelefone}
Endereço:
  ${this.getEndereco.toString()}
Cachorros: `;

    this._cachorros.forEach(
      cachorro => {
        output += `${cachorro.getNome}`
      }
    );

    return output;
  }
}
