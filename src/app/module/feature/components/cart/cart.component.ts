import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { CartItemComponent } from 'src/app/module/shared/components/cart-item/cart-item.component';
import { getCartFailure } from 'src/app/State/cart/cart.action';
import { CartService } from 'src/app/State/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:any
  usercart:any 

  constructor(private router:Router, private cartService:CartService, private store:Store<AppState>){}

  ngOnInit(){
    this.cartService.getCart() 
    this.store.pipe(select((store) => store.cart)).subscribe((cart)=>{
      this.usercart= cart
      console.log("user cart -",this.usercart)
    });
    window.scrollTo(0, 0) 
  }
  
  navigateToCheckout(){
    this.router.navigate(["checkout"])
  }

  removeCartItem = (cartItemId: Number)=>{
    this.cartService.removeCartItem(cartItemId)
  }


}