export class Produto{
    public titulo: string;
    public descricao: string;
    public preco: number;
    public quantidade: number
    public tipo: string

    construtor(){
        this.titulo = "";
        this.descricao = "";
        this.preco = 0;
        this.quantidade = 0;
    }
}