import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeatureModule } from './module/feature/feature.module';
import { SharedModule } from './module/shared/shared.module';
import { AdminModule } from './module/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { SigninComponent } from './module/auth/signin/signin.component';
import { SignupComponent } from './module/auth/signup/signup.component';
import { AuthModule } from './module/auth/auth.module';
import { authReducer } from './State/authorization/authorization.reducer';
import { userReducer } from './State/user/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { ProductReducer } from './State/Product/product.reducer';
import { CartReducer } from './State/cart/cart.reducer';
import { OrderReducer } from './State/order/order.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    StoreModule.forRoot({auth:authReducer, user: userReducer, product: ProductReducer,  cart: CartReducer, order: OrderReducer}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
