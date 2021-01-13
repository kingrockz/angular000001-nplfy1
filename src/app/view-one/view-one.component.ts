import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [{name:'karthi',age:20,gender:'m'},{name:'DILIP',age:24,gender:'m'},{name:'livya',age:25,gender:'f'}];

}
