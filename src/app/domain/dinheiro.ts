import { Pagamento } from './pagamento';
import { StatusPagamento } from './status-pagamento';

export class Dinheiro implements Pagamento {
    troco: number | boolean;
    status: StatusPagamento;
    valor: number;
    dataPagamento: Date;

    pagar(): void {
        throw new Error('Method not implemented.');
    }
}
