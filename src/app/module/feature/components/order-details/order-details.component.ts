import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { OrderService } from 'src/app/State/order/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  orders:any
  activeStep = 3;

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) {
    this.store.pipe(select((state) => state.order)).subscribe((order) => {
      this.orders = order.order;
      console.log('order from state ', this.orders);
    });
  }

  ngOnInit(){
   this.activatedRoute.paramMap.subscribe((params) => {
      console.log("params here", params)
      const orderId = params.get('id');
      console.log('order id params ', orderId);
      if (orderId) this.orderService.getOrderById(orderId);
  });

  }
}
