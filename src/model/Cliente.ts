import { Endereco } from './Endereco';

export class Cliente{
    private _id: any;
    private _nome: string;
    private _cpf: string;
    private _endereco: Endereco;

    public get id():any{
        return this._id;
    }

    public set id(id: any){
        this._id = id;
    }

    public get nome() : string {
        return this._nome;
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }
    

	public get cpf(): string {
		return this._cpf;
	}

	public set cpf(value: string) {
		this._cpf = value;
	}

	public get endereco(): Endereco {
		return this._endereco;
	}

	public set endereco(value: Endereco) {
		this._endereco = value;
	}
    
}