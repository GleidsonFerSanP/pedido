export class Endereco{
    private _logradouro: String;
    private _complemento: String;
    private _numero: String;
    private _cep: String;
    private _bairro: String;
    private _cidade: String;
    private _uf: String;

	public get logradouro(): String {
		return this._logradouro;
	}

	public set logradouro(value: String) {
		this._logradouro = value;
	}

	public get complemento(): String {
		return this._complemento;
	}

	public set complemento(value: String) {
		this._complemento = value;
	}

	public get numero(): String {
		return this._numero;
	}

	public set numero(value: String) {
		this._numero = value;
	}

	public get cep(): String {
		return this._cep;
	}

	public set cep(value: String) {
		this._cep = value;
	}

	public get bairro(): String {
		return this._bairro;
	}

	public set bairro(value: String) {
		this._bairro = value;
	}

	public get cidade(): String {
		return this._cidade;
	}

	public set cidade(value: String) {
		this._cidade = value;
	}

	public get uf(): String {
		return this._uf;
	}

	public set uf(value: String) {
		this._uf = value;
	}
    
}