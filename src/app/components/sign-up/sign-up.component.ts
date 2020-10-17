import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  email: string;
  password: string;
  errorIn: string

  constructor(public auth: AuthService) {
    
   }

  ngOnInit(): void {
    this.auth.errorIn = this.errorIn;
  }
  signup(){
    this.auth.signup(this.email, this.password)
    this.email = this.password = '';
  }

}
