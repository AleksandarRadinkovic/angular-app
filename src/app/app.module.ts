import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AuthGuard } from './auth.guard'

import { environment } from '../environments/environment';


import { TaskService } from './services/task.service';
import { AuthService } from './services/auth.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';  


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-app'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    CommonModule,
    FormsModule

    
  ],
  providers: [TaskService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
