import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { CartService } from 'src/app/State/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'] 
})
export class CartItemComponent {
  @Input() showButton!:boolean
  @Input() cartItem:any

  
  constructor(private cartService: CartService, private store: Store<AppState>){}

  updateCartItem(num:number){
    console.log("cart item quantity - "+ num)
    this.cartService.updateCartItem({
      cartItemId: this.cartItem.cartItemId,
      data: {quantity: num + this.cartItem.quantity}
    })
    this.cartService.getCart() 
  }

  removeCartItem(){
    console.log("removed item")
    this.cartService.removeCartItem(this.cartItem.cartItemId)
    this.cartService.getCart()
  }

  

}

