import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './module/admin/admin-routing.module';
import { CartComponent } from './module/feature/components/cart/cart.component';
import { CheckoutComponent } from './module/feature/components/checkout/checkout.component';
import { HomeComponent } from './module/feature/components/home/home.component';
import { OrderDetailsComponent } from './module/feature/components/order-details/order-details.component';
import { OrderComponent } from './module/feature/components/order/order.component';
import { PaymentSuccessComponent } from './module/feature/components/payment-success/payment-success.component';
import { PaymentComponent } from './module/feature/components/payment/payment.component';
import { ProductDetailsComponent } from './module/feature/components/product-details/product-details.component';
import { ProductsComponent } from './module/feature/components/products/products.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'product-details/:id', component:ProductDetailsComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'checkout/payment/:id', component:PaymentComponent},
  {path:'payment-success', component:PaymentSuccessComponent},
  {path:'account/orders', component:OrderComponent},
  {path:'order/:id', component:OrderDetailsComponent},
  {path:"admin", loadChildren:()=>import("./module/admin/admin-routing.module").then(m=>AdminRoutingModule)},
  {path:':levelone/:leveltwo/:levelthree', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
