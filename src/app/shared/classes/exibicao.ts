import { Pedido } from "app/shared/classes/pedido";

export class Exibicao {
    public etapa: string;
    public pedidos: Pedido[];

    constructor(etapa: string){
        this.etapa = etapa;
        this.pedidos = [];
    }
}