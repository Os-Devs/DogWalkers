export class Cachorro {
  public id: number;
  public nome: string;
  public peso: number;
  public porte: string;
  public raca: string;

  constructor(nome: string, peso: number, porte: string, raca: string) {
    this.nome = nome;
    this.peso = peso;
    this.porte = porte;
    this.raca = raca;
  }

//   get getNome(): String {
//     return this._nome;
//   }
//
//   set setNome(newName: string) {
//     this._nome = newName;
//   }
//
//   get getPeso(): number {
//     return this._peso
//   }
//
//   set setPeso(newPeso: number) {
//     this._peso = newPeso;
//   }
//
//   get getPorte(): string {
//     return this._porte;
//   }
//
//   set setPorte(newPorte: string) {
//     this._porte = newPorte;
//   }
//
//   get getRaca(): string {
//     return this._raca;
//   }
//
//   set setRaca(newRaca: string) {
//     this._raca = newRaca;
//   }
//
//   toString(): string {
//     let output: string;
//
//     output = `Nome: ${this.getNome}
// Peso: ${this.getPeso}
// Porte: ${this.getPorte}
// Raça: ${this.getRaca}`;
//
//     return output;
//   }
}
