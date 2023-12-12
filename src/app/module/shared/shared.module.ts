import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavContentComponent } from './navbar/nav-content/nav-content.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarComponent } from './components/star/star.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent,
    StarComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    StarComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
  ]
})
export class SharedModule { }
