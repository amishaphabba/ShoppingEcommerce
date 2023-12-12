import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { CartService } from 'src/app/State/cart/cart.service';
import { ProductService } from 'src/app/State/Product/product.service';
import { mensKurta } from 'src/Data/Men/men_kurta';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  selectedSize:any
  reviewsList=[1,3,5]
  relatedProducts:any 
  product:any
  productId:any

  constructor(private router:Router, private productService:ProductService, private activatedRoute:ActivatedRoute, private store:Store<AppState>, private cartService: CartService){}

  ngOnInit(){
    this.relatedProducts = mensKurta
    const id = this.activatedRoute.snapshot.paramMap.get("id"); 
    this.productId=id
    this.productService.findProductsById(id);
    window.scrollTo(0, 0) 

    
    this.store.pipe(select((store) => store.product)).subscribe((product)=>{
      this.product = product?.products
      console.log("store data in product-details ",product.products)
    });
  }
  
  addToCart(){
    console.log("selected size- ",this.selectedSize)
    const data={size:this.selectedSize, productId: this.productId}
    this.cartService.addItemToCart(data)
    this.cartService.getCart()

    this.router.navigate(['cart'])
  }
}
