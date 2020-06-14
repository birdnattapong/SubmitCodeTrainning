import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Order } from '../payment/Order';
import { Ticket } from '../buy-ticket/Ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  orders : Array<Order> = [];

  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit() {
    this.orders = this.dataService.getParamData();
    console.log(this.orders);
  }

  goDetail(orderID : number){
    this.dataService.setParamData(this.orders);
    this.dataService.setParamOrderID(orderID);
    this.router.navigate(['product-detail']);
  }

  goBuyTicket() {
    this.dataService.setParamData(this.orders);
    this.router.navigate(['select-ticket']);
  }
}