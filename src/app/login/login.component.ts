import { mockData } from './../helper/mockData';
import { UserModel } from '../helper/UserModel';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  private isEmailVerified:boolean = false;
  private isotpVerified:boolean = false;
  private passwordVerified:boolean = false;
  

  private isEmailentered:boolean = false;
  emailId:any = new FormControl('');
  otp:any = new FormControl('');
  password:any = new FormControl('');
  private user:UserModel = new UserModel();
  private verifiedUser:UserModel = new UserModel;


  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  get emailVerifiedCheck(){
    return this.isEmailVerified;
  }

  get otpVerifiedCheck(){
    return this.isotpVerified;
  }

  get passwordVerifiedCheck(){
    return this.passwordVerified;
  }

  set setEmailVerified(value:any){
    this.isEmailVerified = value;
  }

  set setOtpVerified(value:boolean){
    this.isotpVerified = value;
  }
  set setPasswordVerified(value:boolean){
    this.passwordVerified = value;
  }

  verifyEmail(){
    console.log(this.emailId.value);
    
    if(this.emailId.value===null||this.emailId.value===""){
        alert("Email can't be empty");
        this.isEmailentered = false;
    }
    else{
      this.isEmailentered = true;
      //email verification code at backend
      // this.user = mockData.filter((element)=>{return element.email===this.emailId})[0];
      // alert(`Email is ${this.user.email}`);
      this.setEmailVerified = true;

    }
  }

  verifyOtp(){
    if(this.otp.value && this.otp.value!='') 
    this.isotpVerified = true;
  }

  login(){}

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

}
