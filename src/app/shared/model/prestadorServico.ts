import { Cliente } from "./cliente";

export class PrestadorServico extends Cliente {
  public horarioDisponibilidade: string;

  constructor(nome: string, cpf: string, nasc: string, horario: string, telefone: string, senha: string,
              rua: string, bairro: string, cep: string, numero: number) {
    super(nome, cpf, nasc, telefone, senha, rua, bairro, cep, numero);
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
