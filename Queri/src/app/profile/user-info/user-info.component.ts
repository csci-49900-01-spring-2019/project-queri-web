import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  username: string = 'NotKevin';
  email:string = 'NotKevin@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
