export class Endereco {
  public id: number;
  public rua: string;
  public bairro: string;
  public cep: string;
  public numeroResidencia: string;

  constructor(rua: string, bairro: string, cep: string, numero: string) {
    this.rua = rua;
    this.bairro = bairro;
    this.cep = cep;
    this.numeroResidencia = numero;
  }

  // get getRua(): string {
  //   return this._rua;
  // }
  //
  // set setRua(newRua: string) {
  //   this._rua = newRua;
  // }
  //
  // get getBairro(): string {
  //   return this._bairro;
  // }
  //
  // set setBairro(newBairro: string) {
  //   this._bairro = newBairro;
  // }
  //
  // get getCep(): string {
  //   return this._cep;
  // }
  //
  // set setCep(newCep: string) {
  //   this._cep = newCep;
  // }
  //
  // get getNumero(): number {
  //   return this._numeroResidencia;
  // }
  //
  // set setNumero(newNumero: number) {
  //   this._numeroResidencia = newNumero;
  // }
  //
  // toString(): string {
  //   let output: string;
  //
  //   output = `Rua: ${this.getRua}
  // Bairro: ${this.getBairro}
  // CEP: ${this.getCep}
  // N° Residência: ${this.getNumero}`;
  //
  //   return output;
  // }
}
