import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Ticket } from '../buy-ticket/Ticket';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.page.html',
  styleUrls: ['./edit-ticket.page.scss'],
})
export class EditTicketPage implements OnInit {
  ticketID : number;
  ticket : Ticket;

  constructor(private activatedRoute : ActivatedRoute, private dataService : DataService,private router : Router) { }

  ngOnInit() {
    this.ticket = this.dataService.getParamData();
    this.ticketID = this.dataService.getParamTicketID();
  }

  quickPick() {
    let whiteBall : Array<number> = [];
    let powerBall : number;
    for (let j = 0; j < 5; j++) {
      whiteBall[j] = Math.floor(Math.random() * 70);
      powerBall = Math.floor(Math.random() * 27);
    }
    this.ticket[this.ticketID].setWhiteBall(whiteBall);
    this.ticket[this.ticketID].setPowerBall(powerBall);
  }

  getTicket(){
    return this.ticket[this.ticketID];
  }

  save() {
    this.dataService.setParamData(this.ticket);
    this.router.navigate(['buy-ticket']);
  }
}
