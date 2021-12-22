// import { Cliente } from "./cliente";
//
// export class Prestador extends Cliente {
//   public horarioDisponibilidade: string;
//
//   constructor(nome: string, cpf: string, nasc: string, horario: string, telefone: string, email: string,
//               senha: string, endereco: string) {
//     super(nome, cpf, nasc, telefone, senha, email, endereco);
//     this.horarioDisponibilidade = horario;
//   }

  export class Prestador {
  public id: number;
  public nome: string;
  private cpf: string;
  public dataNasc: string;
  public telefone: string;
  public email: string;
  private senha: string;
  public endereco: string;
  public horarioDisponibilidade: string;

  constructor(nome: string, cpf: string, nasc: string, telefone: string, email: string, senha: string, endereco: string, horario) {

    this.nome = nome;
    this.cpf = cpf;
    this.dataNasc = nasc;
    this.telefone = telefone;
    this.email = email;
    this.senha = senha;
    this.endereco = endereco;
    this.horarioDisponibilidade = horario;
  }
//   get getHorarioDisponibilidade(): string {
//     return this._horarioDisponibilidade;
//   }
//
//   set setHorarioDisponibilidade(newHora: string) {
//     this._horarioDisponibilidade = newHora;
//   }
//
//   toString(): string {
//     let output: string;
//
//     output = `Nome: ${super.getNome}
// CPF: ${super.getCpf}
// Idade: ${super.idade(super.getDataNasc)}
// Telefone: ${super.getTelefone}
// Endereço:
//   ${super.getEndereco.toString()}`;
//
//     return output;
//   }
}
