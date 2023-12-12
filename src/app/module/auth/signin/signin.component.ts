import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/authorization/authorization.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private formBuilder:FormBuilder, private store:Store, private authService:AuthService){}

  @Input() changeTemplateToSignup:any


  loginForm : FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, 
      Validators.minLength(8)]]
  })

  submitForm():void{
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      console.log("login data", this.authService.login(this.loginForm.value))
    }
  }


}
