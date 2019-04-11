import { Component, OnInit, Input } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DemoService]
})
export class HomeComponent implements OnInit {
  post: Post;
  constructor(private demoService: DemoService) { }
  comments: string[]; // Object.keys(this.post.comments);

  category: string = 'category1';
  postID: string = '0';

  ngOnInit() {
    this.getData();
  }

  getData(): void{
    this.demoService.getPostInCategory(this.category, this.postID)
      .subscribe(post => {this.post = post
        console.log(post);
        this.comments = Object.keys(this.post.comments);
        //this.stats = Object.keys(this.post.meta);
       });
  }

}
