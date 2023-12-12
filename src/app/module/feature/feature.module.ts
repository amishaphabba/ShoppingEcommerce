import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './components/feature.component';
import { HomeComponent } from './components/home/home.component';
import { HomeCarouselComponent } from './components/home/home-carousel/home-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from "../shared/shared.module";
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderCard1Component } from './components/order-card1/order-card1.component';

@NgModule({
    declarations: [
        FeatureComponent,
        HomeComponent,
        HomeCarouselComponent,
        ProductSliderComponent,
        HomeProductCardComponent,
        ProductsComponent,
        CartComponent,
        ProductDetailsComponent,
        CheckoutComponent,
        PaymentComponent,
        PaymentSuccessComponent,
        OrderComponent,
        OrderDetailsComponent,
        ProductReviewCardComponent,
        AddressFormComponent,
        OrderCardComponent,
        OrderCard1Component
    ],
    exports: [
        FeatureComponent,
        HomeComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        SharedModule,
        MatProgressBarModule,
        ReactiveFormsModule,
        FormsModule,
        // MatFormFieldModule,
        MatInputModule,
        // MatSelectModule,
    ]
})
export class FeatureModule { }
