import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';
import { PositionStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private demoService: DemoService ) { }

  posts: Post[] = [];
  keys: string[] = [];

  async ngOnInit() {
    console.log('Login Component');
    this.posts = await this.getKeys();
    this.keys = Object.keys(this.posts);
    // this.getKeys();
    // console.log(this.keys.values);
    this.router.navigateByUrl('/featured/' + this.keys[0]);
  }

  async getKeys(){
    let temp: Post[];
    await this.demoService.getAll('featured')
    .toPromise()
    .then( post => {
      temp = post;
      }
    );

    return temp;

    /*
    await this.demoService.getAll('featured')
    .subscribe(posts => {
      this.keys = Object.keys(posts);
      console.log(this.keys);
      // this.router.navigate(['/featured', this.postsKeys[this.currentPostNumber]]);
  });
*/
  }

}
