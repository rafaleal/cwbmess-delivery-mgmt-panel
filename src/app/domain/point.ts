import { Address } from './address';
import { TaxaEspera } from './taxa';
import { SumAmount } from './sum-amount';

export class Point {
    id: number;
    waitingTime: number = 0;
    scheduledArrivalTime: string;
    address: Address;
    personResponsible: string;

}
