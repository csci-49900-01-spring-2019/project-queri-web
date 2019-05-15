import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ) { }
  username: string = 'NotKevin';
  email:string = 'NotKevin@gmail.com';

  questions: string[] = [];

  ngOnInit() {
    console.log('Profile!');
    for (let i = 0; i< 30; i++){
      this.questions.push('Sample Question');
    }
  }
}
