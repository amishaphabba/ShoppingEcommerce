import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_URL } from "src/app/config/api";
import { addItemToCartFailure, addItemToCartSuccess, getCartFailure, getCartSuccess, removeCartItemFailure, removeCartItemSuccess, updateCartItemFailure, updateCartItemSuccess } from "./cart.action";


@Injectable({
    providedIn: 'root',
})

export class CartService{
    apiUrl = BASE_URL;

    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ){}

    addItemToCart(reqData: any){
        const url = `${this.apiUrl}/api/cart/add`
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'content-Type': 'application/json',
        });

        return this.http
        .put(url, reqData, {headers})
        .pipe(
            map((data:any)=>{
                console.log("added item " , data)
                return addItemToCartSuccess({payload: data});
            }),
            catchError((error: any)=>{
                console.log("inside addItemToCartFailure")
                return of((addItemToCartFailure(error.response && error.response.data.message ? error.response.data.message : error.message)))
            })
        ).subscribe((action)=>this.store.dispatch(action))
    }

    getCart(){
        const url = `${this.apiUrl}/api/cart/`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'content-Type': 'application/json',
        });

        return this.http
        .get(url, {headers}).pipe(
            map((data:any)=>{
                console.log("cart------ " , data)
                return getCartSuccess({payload: data});
            }),
            catchError((error: any)=>{
                console.log("error inside getCartFailure ---")
                return of((getCartFailure(error.response && error.response.data.message ? error.response.data.message : error.message)))
            })
        ).subscribe((action)=>this.store.dispatch(action))

    }
    

    removeCartItem(cartItemId:Number){
        const url = `${this.apiUrl}/api/cart_items/${cartItemId}`
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'content-Type': 'application/json',
        });

         this.http
        .delete(url, {headers})
        .pipe(
            map((data:any)=>{
                console.log("item deleted " , data)
                return removeCartItemSuccess({cartItemId})
            }),
            catchError((error: any)=>{
                return of((removeCartItemFailure(error.response && error.response.data.message ? error.response.data.message : error.message)))
            })
        ).subscribe((action)=>this.store.dispatch(action))

        return this.http
        .get(url, {headers}).pipe(
            map((data:any)=>{
                console.log("cart------ " , data)
                return getCartSuccess({payload: data});
            }),
            catchError((error: any)=>{
                console.log("error inside getCartFailure ---")
                return of((getCartFailure(error.response && error.response.data.message ? error.response.data.message : error.message)))
            })
        ).subscribe((action)=>this.store.dispatch(action))

    }

    // updateCartItem(reqData: any){
    //     console.log("req data in update cart service",reqData)
    //     const url = `${this.apiUrl}/api/cart_items/${reqData.cartItemId}`
    //     const headers = new HttpHeaders({
    //         Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    //         'content-Type': 'application/json',
    //     });

    //     return this.http
    //     .put(url, reqData.data, {headers})
    //     .pipe(
    //         map((data:any)=>{
    //             console.log("updated item " , data)
    //             return updateCartItemSuccess({payload: data})
    //         }),
    //         catchError((error: any)=>{
    //             return of((updateCartItemFailure(error.response && error.response.data.message ? error.response.data.message : error.message)))
    //         })
    //     ).subscribe((action)=>this.store.dispatch(action))
    // }

    updateCartItem(reqData: any){
        console.log("req data in update cart service",reqData)
        let url = `${this.apiUrl}/api/cart_items/${reqData.cartItemId}`
        let headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'content-Type': 'application/json',
        });

         this.http
        .put(url, reqData.data, {headers})
        .pipe(
            map((data:any)=>{
                console.log("updated item " , data)
                return updateCartItemSuccess({payload: data})
            }),
            catchError((error: any)=>{
                return of((updateCartItemFailure(error.response && error.response.data.message ? error.response.data.message : error.message)))
            })
        ).subscribe((action)=>this.store.dispatch(action))

         url = `${this.apiUrl}/api/cart/`;
         headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'content-Type': 'application/json',
        });

        return this.http
        .get(url, {headers}).pipe(
            map((data:any)=>{
                console.log("cart------ " , data)
                return getCartSuccess({payload: data});
            }),
            catchError((error: any)=>{
                console.log("error inside getCartFailure ---")
                return of((getCartFailure(error.response && error.response.data.message ? error.response.data.message : error.message)))
            })
        ).subscribe((action)=>this.store.dispatch(action))
    }

}