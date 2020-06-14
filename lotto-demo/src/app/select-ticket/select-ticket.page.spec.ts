import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectTicketPage } from './select-ticket.page';

describe('SelectTicketPage', () => {
  let component: SelectTicketPage;
  let fixture: ComponentFixture<SelectTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
