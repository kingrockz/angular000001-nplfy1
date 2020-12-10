import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../user";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private formSubmitAttempt: boolean;

  Usermodel = new User("", "");

  constructor(private router: Router) { 

    
  }

  ngOnInit(): void {

    
  }

  onClickSubmit(data) {
    // alert("Entered Email id : " + data.email);
    // alert("Entered Password : " + data.password);

      
      localStorage.setItem('SeesionUser',data.email)  
   
      this.router.navigate(['/profile']);
    // this.authService.login(data);
    // this.formSubmitAttempt = true;
 }

}
