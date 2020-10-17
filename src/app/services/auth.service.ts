import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  user$: Observable<User>;
  errorIn: string;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    ) { 
      this.user$ = this.afAuth.authState;
    }
  
    login(email: string, password: string){                                  
      this.afAuth.signInWithEmailAndPassword(email,password).then(    
        value =>{
          sessionStorage.setItem("loggedIn", email);
          console.log('Nice!')      
          this.router.navigate(['dashboard']);    
        }                                                     
      ).catch(err => {          
        console.log('Something went wrong:', err.message);
        this.router.navigate(['sign-up']); 
      })                                                  
    }    

  signup(email: string, password: string){                                  
    this.afAuth.createUserWithEmailAndPassword(email,password).then(    
      value =>{
        console.log('Success!', value)      
        this.router.navigate(['dashboard']);    
      }                                                     
    ).catch(err => {          
      console.log('Something went wrong:', err.message);
        this.errorIn = err.message;
    })                                                  
  }
  
  logout(){
    this.afAuth.signOut();
    this.router.navigate(['sign-in'])
  }
}  
