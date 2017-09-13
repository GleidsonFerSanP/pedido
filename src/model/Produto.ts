export class Produto{
    private _nome: string;
    private _descricao: string;
    private _preco: number;

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public get descricao(): string {
		return this._descricao;
	}

	public set descricao(value: string) {
		this._descricao = value;
	}

	public get preco(): number {
		return this._preco;
	}

	public set preco(value: number) {
		this._preco = value;
	}
    
}