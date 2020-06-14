export class Ticket
{
    ticketID : number;
    whiteBall : Array<number> = [];
    powerBall : number;

    constructor(ticketID : number, whiteBall : Array<number>, powerBall : number){
        this.ticketID = ticketID;
        this.whiteBall = whiteBall;
        this.powerBall = powerBall;
    }
    
    setWhiteBall(whiteBall){
        this.whiteBall = whiteBall;
    }

    setPowerBall(powerBall){
        this.powerBall = powerBall;
    }

    getTicketID(){
        return this.ticketID;
    }

    getWhiteBall(){
        return this.whiteBall;
    }

    getPowerBall(){
        return this.powerBall;
    }
}