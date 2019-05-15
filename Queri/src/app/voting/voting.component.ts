import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private demoService: DemoService, private title: Title, private route: ActivatedRoute,
    private router: Router) { }

  posts: Post[] = [];
  postKeys: string[] = [];
  type: string = 'voting';

  ngOnInit() {
    this.title.setTitle('Vote');
    this.demoService.getAll(this.type)
      .subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
        this.postKeys = Object.keys(this.posts);
      });


    if(this.posts.length === 0){
      // this.router.navigateByUrl('/404');
    }
  }


}
