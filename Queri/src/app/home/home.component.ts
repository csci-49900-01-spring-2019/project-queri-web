import { Component, OnInit, Input } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../shared/Data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DemoService]
})
export class HomeComponent implements OnInit {
  post: Post;
  constructor(private demoService: DemoService, private authService : AuthService){

  }
  comments: string[]; // Object.keys(this.post.comments);

  type: string = 'featured';
  postID: string = '0';

  ngOnInit() {
    //this.getData();
    if(localStorage.getItem("idToken") == "" || localStorage.getItem("idToken") == null){
        this.authService.doGoogleLogin();
    }else{
      this.getData();
    }

  }

  getData(): void{
    this.demoService.getPostInType(this.type, this.postID)
      .subscribe(post => {this.post = post
        console.log(post);
        this.comments = Object.keys(this.post.comments);
        //this.stats = Object.keys(this.post.meta);
       });
  }

}
