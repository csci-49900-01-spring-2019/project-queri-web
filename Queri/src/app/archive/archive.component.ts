import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  posts: Post[] = [];
  postKeys: string[] = [];
  type: string = 'archived';

  ngOnInit() {
    this.demoService.getAll(this.type)
      .subscribe(posts => {
        this.posts = posts;
      //  console.log(this.posts);
        this.postKeys = Object.keys(this.posts);
      }
    );
  }

}
