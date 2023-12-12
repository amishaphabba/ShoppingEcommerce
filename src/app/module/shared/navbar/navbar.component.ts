import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AuthComponent } from '../../auth/auth.component';
import { UserService } from 'src/app/State/user/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { BASE_FRONT, BASE_URL } from 'src/app/config/api';
import { HomeComponent } from '../../feature/components/home/home.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentSection:any
  isNavbarContentOpen:any
  user:any
  noUser:any

  constructor(private router:Router, private dialog: MatDialog, private userService:UserService, private store:Store<AppState>){}

  openHome(){
      this.router.navigate([''])
  }

  openNavbarContent(section:any){
    window.scrollTo(0, 0) 
    this.isNavbarContentOpen=true;
    this.currentSection=section;
  }

  closeNavbarContent(){
    this.isNavbarContentOpen=false;
  }

  ngOnInit(){
    if(localStorage.getItem("jwt"))this.userService.getUser()
    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
      this.user = user.user
      if(user.user){
        this.dialog.closeAll()
      }
      else if(user.user==null){
        this.noUser = true;
      }
      console.log("user- ",user.user)
    })
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event:MouseEvent){
    const modalContainer = document.querySelector(".modal-container")
    const openButtons = document.querySelectorAll(".open-button")
    let clickInsideButton = false;

    openButtons.forEach((button:Element)=>{
      // event.target is a property of an event object that refers to the element that triggered the event.

      if(button.contains(event.target as Node)){
        clickInsideButton=true
      }
    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent()
    }
    
  }

  navigateToCart(path:string){
    this.router.navigate([path])
  }

  navigateTo(path:any){
    this.router.navigate([path])
  }

  openLoginModal(){
    this.dialog.open(AuthComponent,{
     width: "400px",
     disableClose:false
    })
  }

  handleLogout=()=>{
    this.userService.logout()
    this.router.navigate([''])
  }

}
