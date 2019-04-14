import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';

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

  
  // Determines what componts will be shown
  // These values should never be equal
  showForm = true;
  showComments = false;

  ngOnInit() {
    this.getData();
  }

  setDataFromchild(data) {
    this.showForm = false;
    this.showComments = true;
  }

  getData(): void {
    this.demoService.getPostInCategory(this.category, this.postID)
      .subscribe(post => {
        this.post = post;
        console.log(post);
        this.comments = Object.keys(this.post.comments);
       });
  }

}
