import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private paramData : any;
  private paramTicketID : number;
  private paramTicket : any;
  private paramOrderID : number;
  private paramValue : number;
  private paramOrder : any;

  constructor() { }

  setParamData(data){
    this.paramData = data;
  }

  getParamData(){
    return this.paramData;
  }

  setParamTicketID(TicketID){
    this.paramTicketID = TicketID;
  }

  getParamTicketID(){
    return this.paramTicketID;
  }

  setParamTicket(paramTicket){
    this.paramTicket = paramTicket;
  }

  getParamTicket(){
    return this.paramTicket;
  }

  setParamOrderID(paramOrderID){
    this.paramOrderID = paramOrderID
  }

  getParamOrderID(){
    return this.paramOrderID;
  }

  setParamValue(paramValue){
    this.paramValue = paramValue;
  }

  getParamValue(){
    return this.paramValue;
  }

  setParamOrder(paramOrder){
    this.paramOrder = paramOrder;
  }

  getParamOrder(){
    return this.paramOrder;
  }
}
