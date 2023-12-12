import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_URL } from "src/app/config/api";
import { createOrderFailure, createOrderSuccess, getOrderByIdFailure, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistorySuccess } from "./order.action";


@Injectable({
    providedIn: 'root',
})

export class OrderService{
    apiUrl = BASE_URL;

    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ){}

    private getHeader():HttpHeaders{
        const token = localStorage.getItem("jwt");
        return new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }

    createOrder(reqData: any){
        console.log("create order", reqData)
        const url = `${this.apiUrl}/api/orders/`
        const headers = this.getHeader()

         return this.http
         .post(url, reqData, {headers})
         .pipe(
            map((data:any)=>{
                console.log("created order", data)
                if(data.orderId){
                    this.router.navigate([`/checkout/payment/${data.orderId}`],{
                        queryParams: {step: '3', order_id: data.orderId}
                    });
                }
                return createOrderSuccess({order: data});
            }),
            catchError((error: any)=>{
                console.log("ERROR IN create order", reqData)
                console.log("error", error);
                return of(
                    createOrderFailure(
                    error.response && error.response.data.message ? error.response.data.message : error.message
                ))
            })
         ).subscribe((action)=> this.store.dispatch(action));
    }

    getOrderById(orderId:string){
        console.log('get order req ', orderId)
        const headers = this.getHeader();
        return this.http
        .get(`${this.apiUrl}/api/orders/${orderId}`, {headers}).pipe(
            map((data: any)=>{
                console.log("order by id", data)
                return getOrderByIdSuccess({order:data})
            }),
            catchError((error:any)=>{
                return of(
                    getOrderByIdFailure(
                    error.response && error.response.data.message ? error.response.data.message : error.message
                ))
            })
        ).subscribe((action)=>this.store.dispatch(action))
    }

    getOrderHistory(){
        const headers = this.getHeader();
        return this.http
        .get(`${this.apiUrl}/api/orders/user`, {headers}).pipe(
            map((data: any)=>{
                console.log("order history", data)
                return getOrderHistorySuccess({orders:data})
            }),
            catchError((error:any)=>{
                return of(
                    getOrderHistoryFailure(
                    error.response && error.response.data.message ? error.response.data.message : error.message
                ))
            })
        ).subscribe((action)=>this.store.dispatch(action))
    }    
}