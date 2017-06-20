export class Usuario{
    public _id: string
    public cpf: string;
    public nome: string
    public senha: string;
    public permissao: string;

    constructor(cpf?: string ,senha?: string, permissao?: string){
        this.cpf = cpf;
        this.senha = senha;
        this.permissao = permissao || null;
    }

    
    public get Login() : string {
        return this.cpf
    }

    
    public get Senha() : string {
        return this.senha;
    }

    public get Permissao(): string{
        return this.permissao;
    }
    
    

}