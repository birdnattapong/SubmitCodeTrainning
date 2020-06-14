import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from './Ticket';
import { DataService } from '../data.service';
import { AlertController } from '@ionic/angular';
import { Order } from '../payment/Order';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.page.html',
  styleUrls: ['./buy-ticket.page.scss'],
})
export class BuyTicketPage implements OnInit {
  orders : Array<Order> = [];
  passedVal = null;
  tickets : Array<Ticket> = [];
  powerPlayPrice : number = this.tickets.length*30;

  constructor(private route: ActivatedRoute, private router: Router, private dataService : DataService, private alertController : AlertController) { 
  }

  createTicket(passedVal : number){
    for (let i =0; i < passedVal ; i++){
      let whiteBall : Array<number> = [];
      let powerBall : number;
      for (let j = 0; j < 5; j++) {
        whiteBall[j] = Math.floor(Math.random() * 70);
        powerBall = Math.floor(Math.random() * 27);
      }
      this.tickets[i] = new Ticket(i+1, whiteBall, powerBall);
    }
  }

  savedTicket(){
    this.tickets = this.dataService.getParamData();
  }

  goEditTicket(ticketID : number) {
    this.dataService.setParamData(this.tickets);
    this.dataService.setParamTicketID(ticketID);
    this.router.navigate(['edit-ticket']);
  }

  ngOnInit() {
    this.passedVal = this.dataService.getParamValue();
    if(this.tickets){
      //if tickets is null
      this.createTicket(this.passedVal);
    }
    else{
      //if tickets is not null
      this.savedTicket();
    }

    if(this.orders){

    }else{
      this.orders = this.dataService.getParamData();
    }
  }

  async presentConfirm() {
    let alert = await this.alertController.create({
      header: 'Powerplay ?',
      message: 'เพิ่มเงินเพียง 30 ฿ ต่อตั๋ว<br>เพื่อเงินรางวันที่มากกว่า',
      buttons: [
        {
          text: 'ไม่จำเป็น',
          role: 'cancel',
          handler: () => {
            this.dataService.setParamOrder(this.orders);
            this.dataService.setParamData('cancel');
            this.dataService.setParamTicket(this.tickets);
            this.router.navigate(['payment']);
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            this.dataService.setParamOrder(this.orders);
            this.dataService.setParamData('confirm');
            this.dataService.setParamTicket(this.tickets);
            this.router.navigate(['payment']);
          }
        }
      ]
    });
    alert.present();
  }
} 