import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usermodel = new User("test@gmail.com", "password");
  constructor() { }

  ngOnInit(): void {

    
  }
  

}
