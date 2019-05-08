import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Post } from '../_models/data';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private demoService: DemoService, 
              private authService: AuthService, 
              private route: ActivatedRoute, 
              private router: Router,
              private title: Title) {
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
  colors: any[] = ['cyan', 'green', 'blue', 'purple', 'pink', 'raspberry', 'magenta', 'tan', 'yellow', 'orange'];

  sample:number;

  ngOnInit() {
    if (localStorage.getItem('idToken') === '' || localStorage.getItem('idToken') == null) {
        this.authService.doGoogleLogin();
    } else {
      this.sample = this.route.snapshot.params['id'];
      this.currentPostNumber = 0;
      console.log('Param: ', this.sample);
      this.currentPostNumber = 0;
      this.getData();
      this.title.setTitle('Home');
    }
    // what if parameter is string ex: featured/ask

    /*
    if(typeof this.sample !== 'number') {
      console.log('Not a number');
      this.router.navigateByUrl('/404');
    }*/
    if( this.sample >= 4 || this.sample < 0) {
      this.router.navigateByUrl('/404');
    }else {
      // console.log(this.currentPostNumber);
      this.currentPostNumber = this.sample;
      // console.log(this.currentPostNumber);
      this.setRandomColor();
    }
  }

  async getData() {
    await this.demoService.getAll(this.type)
      .subscribe(posts => {
        this.posts = posts;
        this.postsKeys = Object.keys(this.posts);
        // console.log(posts);
        this.router.navigate(['/featured', this.postsKeys[this.currentPostNumber]]);
    });
  }

  setRandomColor(): void {
    // For Random Colors
    // const index = Math.floor(Math.random() * this.numberOfColors) + 0;
    // this.color = this.colors[index];

    // For Rotating Colors
    this.color = this.colors[this.currentPostNumber % this.colors.length];
  }

  onClickPrevious( id: any ) {
    this.showComments = false;
    if (this.currentPostNumber === 0) {
      this.currentPostNumber = +this.postsKeys.length - 1;
    } else {
      this.currentPostNumber = +this.currentPostNumber - 1;
    }
    console.log(this.currentPostNumber);
    this.setRandomColor();
    this.router.navigate(['/featured', this.postsKeys[this.currentPostNumber]]);
  }

  onClickNext( id: any ) {
    this.showComments = false;
    if (+this.currentPostNumber === +this.postsKeys.length - 1) {
      this.currentPostNumber = 0;
    } else {
      this.currentPostNumber = +this.currentPostNumber + 1;
    }
    console.log(this.currentPostNumber);
    this.setRandomColor();
    this.router.navigate(['/featured', this.postsKeys[this.currentPostNumber]]);
  }

  onClickAnswer() {
    this.showForm = !this.showForm;
  }

  async setDataFromchild( data ) {
    await this.demoService.getCommentsInPostInView(this.type, this.postsKeys[this.currentPostNumber])
    .subscribe(comments => {
      // console.log('Comments: ', comments);
      this.comments = comments;
      this.commentkeys = Object.keys(this.comments);
      // console.log('Comments: ', this.comments);
      // console.log('# of Comments: ', this.commentkeys.length);
    });
    this.showForm = false;
    this.showComments = true;
  }

  onTest() {
    this.router.navigateByUrl('/page_not_found');
  }
}

