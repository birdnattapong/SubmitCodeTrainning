import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../data.service';
import { Order } from '../payment/Order';


@Component({
  selector: 'app-select-ticket',
  templateUrl: './select-ticket.page.html',
  styleUrls: ['./select-ticket.page.scss'],
})
export class SelectTicketPage implements OnInit {
  orders : Array<Order> = [];
  selectedVal = '1';
  number : any[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '7'},
    {value: '8'},
    {value: '9'},
    {value: '10'},
  ];

  constructor(private router : Router, private dataService : DataService) {}

  goBuyTicket(){
    this.dataService.setParamData(this.orders);
    this.dataService.setParamValue(this.selectedVal);
    this.router.navigate(['buy-ticket']);
  }

  ngOnInit() {
    if(this.dataService.getParamData()){
      //if null
      console.log('null');
    }else{
      //if not null
      console.log('not null' + this.dataService.getParamData());
    }
  }
}
