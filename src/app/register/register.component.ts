import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Usermodel = new User("test@gmail.com", "password");
  constructor() { }

  ngOnInit(): void {
  }

}
