import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data = null
  Email = null
  isButtonVisible : Boolean
  
  constructor(private http: HttpClient ,private router: Router) { }

  
  ngOnInit(): void {

    var email = localStorage.getItem("SeesionUser");
    console.log(email)
    this.Email = email
    this.getData()
    this.isButtonVisible = true;
  }




  getData(){
    const url ='https://jsonplaceholder.typicode.com/posts'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }


  logout(){;
    localStorage.removeItem("SeesionUser")
    this.router.navigate(['/']);
  }



 

}
