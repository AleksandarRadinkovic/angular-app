import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Angular Task App';
  user$: Observable<User>;


  constructor(public auth: AuthService) {
    this.user$ = this.auth.user$;
   }

  ngOnInit(): void {
  }

}
