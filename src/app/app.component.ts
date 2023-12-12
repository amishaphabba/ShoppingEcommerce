import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from './models/AppState';
import { CartService } from './State/cart/cart.service';
import { UserService } from './State/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-angular';
  noUser:any

  constructor(private router:Router, private userService:UserService, private store:Store<AppState>,
    private cartService: CartService){}

  ngOnInit(){
    if(localStorage.getItem("jwt"))
    {
    this.userService.getUser()
    this.cartService.getCart()
    }

    this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
      this.userService.getUser()
      this.cartService.getCart()
      console.log("Store", user)
    })
  }
}
