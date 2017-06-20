import { Produto } from "app/shared/classes/produto";

export class Pedido {
    public _id: string;
    public pizza: Produto[] = [];
    public horaPedidoFeito: Date;
    public horaPedidoAceito: Date;
    public horaCozinhaAceito: Date;
    public horaCozinhaPronto: Date;
    public horaEntregaCaminho: Date;
    public horaEntregaPronto: Date;
    public horaRejeita: Date;
    public precoTotal: number;
    public etapa: String;
    public estaPago: boolean;
    public clienteCPF: String;
    public motivoRejeicao: String;

    construtor(){
        this.precoTotal = 0;
        this.etapa = "ENTRADA";
        this.estaPago = false;
    }

    
}
