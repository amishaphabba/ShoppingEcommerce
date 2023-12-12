import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { OrderService } from 'src/app/State/order/order.service';
import { UserService } from 'src/app/State/user/user.service';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  address: any;
  user:any

  constructor(private fb:FormBuilder, private orderService: OrderService, private userService:UserService, private store:Store<AppState>){}

  ngOnInit(){
    if(localStorage.getItem("jwt"))this.userService.getUser()
    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
      this.user = user.user
      this.address = user.user.address
      console.log("address form user- ",user.user)
      console.log("address- ",user.user.address)
    })
  }
 
  

  myForm:FormGroup = this.fb.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipcode:["",Validators.required],
    mobile:["",Validators.required],
  })

  createOrder(item:any){
    console.log("in createOrderHandler--", item)
    this.orderService.createOrder(item)

  }

  handleSubmit=()=>{
    const formData = this.myForm.value
    console.log("formdata", formData) 
    this.createOrder(formData)
    }


}
