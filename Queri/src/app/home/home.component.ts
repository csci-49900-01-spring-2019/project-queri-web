import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [DemoService],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private demoService: DemoService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private cd: ChangeDetectorRef)
  {
    // this.route.params.subscribe( params => console.log(params) );
  }
  // Holds Response from getAll()
  posts: Post[] = [];

  // Category
  type: string = 'featured';

  postsKeys: string[] = [];
  // Number of Posts available

  numberOfPosts: number = 100;

  // Controls when a the from and comments will be
  // shown on a screen
  showForm = false;
  showComments = false;
  color: any;
  colors: any[] = ['cyan', 'green', 'blue', 'purple', 'pink', 'magenta', 'black', 'grey', 'yellow', 'orange'];
  numberOfColors: number;
  currentPostNumber: number = 0;
  commentkeys: string[] = [];
  comments: Comment[] = [];

  ngOnInit() {
    if (localStorage.getItem("idToken") == "" || localStorage.getItem("idToken") == null){
        this.authService.doGoogleLogin();
    } else {
      this.numberOfColors = this.colors.length;
      this.setRandomColor();
      this.getData();
      
      // this.numberOfPosts = this.posts.length;
    }
  }

// tslint:disable-next-line: use-life-cycle-interface
 

  getData() {
    this.demoService.getAll(this.type)
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts);
        this.numberOfPosts = this.posts.length;
        //console.log(this.numberOfPosts);
        this.postsKeys = Object.keys(this.posts);
    });
  }

  setRandomColor(): void {
    const index = Math.floor(Math.random() * this.numberOfColors) + 0;
    this.color = this.colors[index];
  }

  onClickPrevious(){
    this.setRandomColor();
    this.showComments = false;
    console.log(this.currentPostNumber);
    if (this.currentPostNumber == 0) {
      this.currentPostNumber = this.numberOfPosts - 1;

    } else {
      this.currentPostNumber = this.currentPostNumber - 1;
    }
    // console.log('Current Number: ' + this.currentPostNumber);
    // this.commentkeys = Object.keys(this.posts[this.currentPostNumber].comments);
  }

  onClickNext() {
    this.setRandomColor();
    this.showComments = false;
    console.log(this.currentPostNumber, this.numberOfPosts - 1)
    if (this.currentPostNumber == this.numberOfPosts - 1) {
      //this.currentPostNumber = 0;
      //console.log('if-next');
    } else {
      this.currentPostNumber = this.currentPostNumber + 1;
      //console.log('else-next');
    }
    // console.log('Current Number: ' + this.currentPostNumber);
    // this.commentkeys = Object.keys(this.posts[this.currentPostNumber].comments);
  }

  onClickAnswer() {
    this.showForm = !this.showForm;
  }

  setDataFromchild( data ) {
    console.log(this.postsKeys[this.currentPostNumber]);
    this.demoService.getCommentsInPostInView(this.type, this.postsKeys[this.currentPostNumber])
    .subscribe(comments => {
      this.comments = comments;
      console.log(this.comments);
      this.commentkeys = Object.keys(this.comments);
      console.log(this.commentkeys);
    });
    this.showForm = false;
    this.showComments = true;
  }
}
