import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Ticket } from '../buy-ticket/Ticket';
import { Order } from '../payment/Order';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],
})
export class PaymentDetailPage implements OnInit {
  orders : Array<Order> = [];
  order : Order;
  order2 : Order;
  tickets : Array<Ticket> = [];
  ticketQty : number = 0;
  ticketPrice : number = 150;
  powerPlayPrice : number = 30;
  powerPlayQty : number = 0;
  productCost : number = 0;
  totalCost : number = 0;
  discount : number = 0;

  constructor(private dataService : DataService,private router : Router, private navCtrl : NavController) { }

  ngOnInit() {
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

  close() {
    this.navCtrl.back();
  }
}
