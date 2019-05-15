import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private demoService: DemoService ) { }

  keys: string[];
  key: any;

  ngOnInit() {
    console.log('Login Component');
    // this.getKeys();
    // console.log(this.keys.values);
    this.router.navigateByUrl('/featured/0');
  }

  async getKeys(){
    await this.demoService.getAll('featured')
    .subscribe(posts => {
      this.keys = Object.keys(posts);
      console.log(this.keys);
      console.log(this.key);
      // this.router.navigate(['/featured', this.postsKeys[this.currentPostNumber]]);
  });

  }

}