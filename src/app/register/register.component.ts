import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}
gotoLogin() {
  this.router.navigate(['/login']);
}
  register(){
    alert("Register works");
  }
}
