import { Ticket } from '../buy-ticket/Ticket';

export class Order
{
    tickets : Array<Ticket> = [];
    ticketQty : number;
    ticketPrice : number;
    powerPlayPrice : number;
    powerPlayQty : number;
    productCost : number;
    totalCost : number;
    discount : number;
    status : any;

    constructor(tickets : Array<Ticket>, ticketQty : number, ticketPrice : number,
                powerPlayPrice : number, powerPlayQty : number, productCost : number,
                totalCost : number, discount : number, status : any)
    {
        this.tickets = tickets;
        this.ticketQty = ticketQty;
        this.ticketPrice = ticketPrice;
        this.powerPlayPrice = powerPlayPrice;
        this.powerPlayQty = powerPlayQty;
        this.productCost = productCost;
        this.totalCost = totalCost;
        this.discount = discount;
        this.status = status;
    }

    getTickets(){
        return this.tickets;
    }

    getTicketQty(){
        return this.ticketQty;
    }

    getTicketPrice(){
        return this.ticketPrice;
    }

    getPowerPlayPrice(){
        return this.powerPlayPrice;
    }

    getPowerPlayQty(){
        return this.powerPlayQty;
    }

    getProductCost(){
        return this.productCost;
    }
    
    getTotalCost(){
        return this.totalCost;
    }

    getDiscount(){
        return this.discount;
    }

    getStatus(){
        return this.status;
    }
}