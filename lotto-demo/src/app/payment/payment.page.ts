import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Ticket } from '../buy-ticket/Ticket';
import { Order } from './Order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  orders : Array<Order> = [];
  order : Order;
  tickets : Array<Ticket> = [];
  ticketQty : number = 0;
  ticketPrice : number = 150;
  powerPlayPrice : number = 30;
  powerPlayQty : number = 0;
  productCost : number = 0;
  totalCost : number = 0;
  discount : number = 0;

  constructor(private dataService : DataService,private router : Router) { }

  ngOnInit() {
    if(this.orders){
      //if null
      
      console.log('orders is null now');
    }else{
      //if not null
      this.orders = this.dataService.getParamOrder();
      console.log('orders is not null now');
    }

    this.tickets = this.dataService.getParamTicket();
    this.ticketQty = this.tickets.length;

    if(this.dataService.getParamData() == 'cancel'){
      console.log(this.tickets);
      console.log('user click Cancel');
    }
    else{
      console.log(this.tickets);
      console.log('user click OK');
      this.powerPlayQty = this.ticketQty;
    }

    this.calculate();
  }

  calculate() {
    this.productCost = (this.ticketPrice * this.ticketQty) + (this.powerPlayPrice * this.powerPlayQty);
    this.totalCost = this.productCost - this.discount;
  }

  pay() {
    this.order = new Order(this.tickets, this.ticketQty, this.ticketPrice, this.powerPlayPrice, this.powerPlayQty, this.productCost, this.totalCost, this.discount, 'wait');
    this.orders.push(this.order);
    this.dataService.setParamData(this.orders);
    this.router.navigate(['product-list']);
  }
}
