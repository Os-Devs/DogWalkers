import { Cliente } from "./cliente";

export class Cachorro {
  private _nome: string;
  private _peso: number;
  private _porte: string;
  private _raca: string;
  protected _donos: Array<Cliente>;

  constructor(nome: string, peso: number, porte: string, raca: string) {
    this._nome = nome;
    this._peso = peso;
    this._porte = porte;
    this._raca = raca;
    this._donos = new Array<Cliente>();
  }

  get getNome(): String {
    return this._nome;
  }

  set setNome(newName: string) {
    this._nome = newName;
  }

  get getPeso(): number {
    return this._peso
  }

  set setPeso(newPeso: number) {
    this._peso = newPeso;
  }

  get getPorte(): string {
    return this._porte;
  }

  set setPorte(newPorte: string) {
    this._porte = newPorte;
  }

  get getRaca(): string {
    return this._raca;
  }

  set setRaca(newRaca: string) {
    this._raca = newRaca;
  }

  get getDonos(): Array<Cliente> {
    return this._donos;
  }

  addDono(dono: Cliente) {
    this._donos.push(dono);
  }

  removeDono(dono: Cliente) {
    this._donos.find(
      remover => {
        if (remover === dono) {
          const indexRemover = this._donos.indexOf(remover);
          if (indexRemover > -1) {
            this._donos.splice(indexRemover, 1);
          }
        }
      }
    );
  }

  toString(): string {
    let output: string;

    output = `Nome: ${this.getNome}
Peso: ${this.getPeso}
Porte: ${this.getPorte}
Raça: ${this.getRaca}
Donos: `;

    this._donos.forEach(
      dono => {
        output += `${dono.getNome} `
      }
    );

    return output;
  }
}
