import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private demoService: DemoService, private authService: AuthService, private route: ActivatedRoute) {
    // this.route.params.subscribe( params => console.log(params) );
  }

  // Category
  type = 'featured';

  // Holds Response from getAll()
  posts: Post[] = [];

  // Post Ids
  postsKeys: string[] = [];

  currentPostNumber: number;

  // Comments
  commentkeys: string[] = [];
  comments: Comment[] = [];

  // Controls when a the from and comments will be
  // shown on a screen
  showForm = false;
  showComments = true;

  // Current Background Color
  color: any;

  // All Colors
  colors: any[] = ['cyan', 'green', 'blue', 'purple', 'pink', 'magenta', 'black', 'grey', 'yellow', 'orange'];

  // numberOfPosts: number;

  timeLeft: number = 60;
  interval;


  ngOnInit() {
    if (localStorage.getItem('idToken') === '' || localStorage.getItem('idToken') == null) {
        this.authService.doGoogleLogin();
    } else {
      this.currentPostNumber = 0;
      this.setRandomColor();
      this.getData();
    }
  }

  getData() {
    this.demoService.getAll(this.type)
      .subscribe(posts => {
        this.posts = posts;
        this.postsKeys = Object.keys(this.posts);
    });
  }

  setRandomColor(): void {
    // For Random Colors
    // const index = Math.floor(Math.random() * this.numberOfColors) + 0;
    // this.color = this.colors[index];

    // For Rotating Colors
    this.color = this.colors[this.currentPostNumber % this.colors.length];
  }

  onClickPrevious() {
    this.showComments = false;
    if (this.currentPostNumber === 0) {
      this.currentPostNumber = this.postsKeys.length - 1;
    } else {
      this.currentPostNumber = this.currentPostNumber - 1;
    }
    this.setRandomColor();
    // this.commentkeys = Object.keys(this.posts[this.currentPostNumber].comments);
  }

  onClickNext() {
    this.showComments = false;
    if (this.currentPostNumber === this.postsKeys.length - 1) {
      this.currentPostNumber = 0;
    } else {
      this.currentPostNumber = this.currentPostNumber + 1;
    }
    this.setRandomColor();
    // this.commentkeys = Object.keys(this.posts[this.currentPostNumber].comments);
  }

  onClickAnswer() {
    this.showForm = !this.showForm;
  }

  setDataFromchild( data ) {
    this.startTimer();
    this.demoService.getCommentsInPostInView(this.type, this.postsKeys[this.currentPostNumber])
    .subscribe(comments => {
      this.comments = comments;
      console.log('Comments: ', this.comments);
      this.commentkeys = Object.keys(this.comments);
      console.log('Comment Keys', this.commentkeys);
    });
    this.showForm = false;
    this.showComments = true;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }
}

