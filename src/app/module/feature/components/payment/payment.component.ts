import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { CartService } from 'src/app/State/cart/cart.service';
import { OrderService } from 'src/app/State/order/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  order:any
  address:any
  orderItems:any
  placedOrder=false
  
  constructor( private activatedRoute: ActivatedRoute, private cartService: CartService,
    private orderService: OrderService, private store:Store<AppState>){}

  ngOnInit(){
    document.body.scrollTop = 0;
    let orderId = this.activatedRoute.snapshot.paramMap.get("id")

    this.store.pipe(select((store)=>store.order)).subscribe((order)=>{
      this.order = order.order
      console.log("order-----",order.order)
    })
  }

  placeOrder(){
    this.placedOrder=true;

  }

}
