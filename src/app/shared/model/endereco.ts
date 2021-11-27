export class Endereco {
  private _rua: string;
  private _bairro: string;
  private _cep: string;
  private _numeroResidencia: number;

  constructor(rua: string, bairro: string, cep: string, numero: number) {
    this._rua = rua;
    this._bairro = bairro;
    this._cep = cep;
    this._numeroResidencia = numero;
  }

  get getRua(): string {
    return this._rua;
  }

  set setRua(newRua: string) {
    this._rua = newRua;
  }

  get getBairro(): string {
    return this._bairro;
  }

  set setBairro(newBairro: string) {
    this._bairro = newBairro;
  }

  get getCep(): string {
    return this._cep;
  }

  set setCep(newCep: string) {
    this._cep = newCep;
  }

  get getNumero(): number {
    return this._numeroResidencia;
  }

  set setNumero(newNumero: number) {
    this._numeroResidencia = newNumero;
  }

  toString(): string {
    let output: string;

    output = `Rua: ${this.getRua}
  Bairro: ${this.getBairro}
  CEP: ${this.getCep}
  N° Residência: ${this.getNumero}`;

    return output;
  }
}
