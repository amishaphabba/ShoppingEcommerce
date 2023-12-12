import { INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { OrderService } from 'src/app/State/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderId:any
  orderHistory:any
  orderitem:any

  constructor(private router: Router, private orderService: OrderService, private store:Store<AppState>){}

  ngOnInit(){
    this.orderHistory = this.orderService.getOrderHistory()
    this.store.pipe(select((store) => store.order)).subscribe((order)=>{
      this.orderHistory= order.orders
      console.log("history -",this.orderHistory)
    });
  }

  navigateToOrderDetails(id:number){
    this.router.navigate([`order/${id}`])
  }
}
