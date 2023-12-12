import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_URL } from "src/app/config/api";
import { getUserFailure, getUserSuccess, logoutSuccess } from "./user.action";

@Injectable({
    providedIn: 'root',
})

export class UserService{
    private apiUrl = BASE_URL+ "/api";
    headers:any

    constructor(private http:HttpClient, private store: Store){
        this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
    }

    getUser(){
        const headers= new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
        return this.http.get(`${this.apiUrl}/users/profile`, {headers}).pipe(
            map((user:any)=>{
            console.log("user profile success",user);
            return getUserSuccess({user:user})
        }),
        catchError((error)=>{
            return of(
                getUserFailure(
                error.response && error.response.data.message ? error.response.data.message : error.message
            ))
        })
        ).subscribe((action)=>this.store.dispatch(action))
    }

    logout(){
        localStorage.removeItem("jwt")
        this.store.dispatch(logoutSuccess())
    }
}
