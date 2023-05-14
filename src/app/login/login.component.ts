import { mockData } from './../helper/mockData';
import { UserModel } from './../helper/model';
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



  private isEmailentered:boolean = false;
  emailId:any = new FormControl('');
  private user:UserModel = new UserModel();
  private verifiedUser:UserModel = new UserModel;
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  get emailVerifiedCheck(){
    return this.isEmailVerified;
  }
  verifyEmail(){
    if(this.emailId.value===null||this.emailId.value===""){
        alert("Email can't be empty");
        this.isEmailentered = false;
    }
    else{
      this.isEmailentered = true;
      //email verification code at backend
      this.user = mockData.filter((element)=>{return element.email===this.emailId})[0];


      alert(`Email is ${this.user.email}`);
    }
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }
}
