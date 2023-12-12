import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-card1',
  templateUrl: './order-card1.component.html',
  styleUrls: ['./order-card1.component.css']
})
export class OrderCard1Component {
  @Input() orderItem: any
}
