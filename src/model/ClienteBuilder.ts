import { Cliente } from './Cliente';

export class ClienteBuilder {

    private _instance: Cliente;

    constructor() {
        this._instance = new Cliente();
    }

    public nome(nome: string):ClienteBuilder{
        this._instance.nome = nome;
        return this;
    }

    public build(): Cliente{
        return this._instance;
    }
}