import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Order } from '../payment/Order';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  orderID : number;
  tempOrderID : number;
  orders : Array<Order> = [];
  order : Order;
  status : string;

  constructor(private dataService : DataService, private navCtrl : NavController, private router : Router) { }

  ngOnInit() {
    this.orders = this.dataService.getParamData();
    this.orderID = this.dataService.getParamOrderID();
    this.tempOrderID = this.orderID + 1;
    this.order = this.orders[this.orderID];
    this.status = this.order.getStatus();
    console.log(this.orders[this.orderID]);

    if(this.checkMatchWait){
      let elm = <HTMLElement>document.querySelector(".waitmsg");
      let elm2 = <HTMLElement>document.querySelector(".arrow1");
      elm.style.color = '#000000';
      elm2.style.color = '#000000';
    }
  }

  checkMatchWait(field1 : string){
    if(field1 !== '' && field1 !== 'wait'){
      return "not match";
    }
    else{
      return "match";
    }
  }

  checkMatchBought(field1 : string){
    if(field1 !== '' && field1 !== 'bought'){
      return "not match";
    }
    else{
      return "match";
    }
  }

  checkMatchAnnounced(field1 : string){
    if(field1 !== '' && field1 !== 'annouced'){
      return "not match";
    }
    else{
      return "match";
    }
  }

  changeStatusToBought(){
    let elm = <HTMLElement>document.querySelector(".waitmsg");
    let elm2 = <HTMLElement>document.querySelector(".arrow2");
    let elm3 = <HTMLElement>document.querySelector(".boughtmsg");
    elm.style.color = '#cac9c9';
    elm2.style.color = '#000000';
    elm3.style.color = '#000000';
  }

  changeStatusToAnnounced(){
    let elm = <HTMLElement>document.querySelector(".boughtmsg");
    let elm2 = <HTMLElement>document.querySelector(".arrow3");
    let elm3 = <HTMLElement>document.querySelector(".announcedmsg");
    elm.style.color = '#cac9c9';
    elm2.style.color = '#000000';
    elm3.style.color = '#000000';
  }

  close() {
    this.navCtrl.back();
  }

  goPaymentDetail() {
    this.router.navigate(['payment-detail']);
  }
}
