import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent {
  @Input() address:any

  constructor(){
    console.log("address in address-card",this.address)
  }
  
}
