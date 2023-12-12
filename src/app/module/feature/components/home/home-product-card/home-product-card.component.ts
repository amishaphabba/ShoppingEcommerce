import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.css']
})
export class HomeProductCardComponent {
  @Input() product: any

  constructor(private router: Router){}


  navigate(){
    console.log(`/product-details/${this.product.id}`)
    this.router.navigate([`/product-details/${this.product.id}`])
  }
}
