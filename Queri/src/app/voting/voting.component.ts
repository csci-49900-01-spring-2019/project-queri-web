import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  posts: Post[] = [];
  postKeys: string[] = [];
  type: string = 'voting';

  ngOnInit() {
    this.demoService.getAll(this.type)
      .subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
        this.postKeys = Object.keys(this.posts);
      });
  }
}
