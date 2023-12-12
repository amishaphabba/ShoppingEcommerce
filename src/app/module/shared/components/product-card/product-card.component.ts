import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { mensJeans } from 'src/Data/Men/men_jeans';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:any
  
  constructor(private router:Router){}

  navigate(){
    this.router.navigate([`/product-details/${this.product.id}`])
  }
}
