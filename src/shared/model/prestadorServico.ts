import { Endereco } from "./endereco";

export class PrestadorServico {
  private _nome: string;
  private _cpf: string;
  private _dataNasc: Date;
  private _senha: string;
  private _horarioDisponibilidade: string;
  private _endereco: Endereco;

  constructor(nome: string, cpf: string, nasc: Date, horario: string, senha: string,
              rua: string, bairro: string, cep: string, numero: number) {
    this._nome = nome;
    this._cpf = cpf;
    this._dataNasc = nasc;
    this._horarioDisponibilidade = horario;
    this._senha = senha;
    this._endereco = new Endereco(rua, bairro, cep, numero);
  }

  get getNome(): string {
    return this._nome;
  }

  set setNome(newName: string) {
    this._nome = newName;
  }

  get getCpf(): string {
    return this._cpf;
  }

  set setCpf(newCpf: string) {
    this._cpf = newCpf;
  }

  get getDataNasc(): Date {
    return this._dataNasc
  }

  set setDataNasc(newNasc: Date) {
    this._dataNasc = newNasc;
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

  get getHorarioDisponibilidade(): string {
    return this._horarioDisponibilidade;
  }

  set setHorarioDisponibilidade(newHora: string) {
    this._horarioDisponibilidade = newHora;
  }
}
