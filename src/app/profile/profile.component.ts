import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var email = localStorage.getItem("SeesionUser");
    console.log(email)
    
  }

}