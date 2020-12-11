import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import {AuthguardServiceService} from './authguard-service.service';
import {AuthenticationGuard} from './authentication.guard'

import { HttpClientModule } from "@angular/common/http";


const routes : Routes = [

  { path: 'profile', component: ProfileComponent,canActivate:[AuthenticationGuard]},
  {path : 'login',component : LoginComponent},
  {path : 'register',component : RegisterComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports : [RouterModule],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
