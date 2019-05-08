import { Component, OnInit, Input } from '@angular/core';
// import { DemoService } from '../../demo.service';
import {MatDialogModule} from "@angular/material";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-archive-question',
  templateUrl: './archive-question.component.html',
  styleUrls: ['./archive-question.component.css']
})
export class ArchiveQuestionComponent implements OnInit {

  constructor(private title: Title) { }

  @Input() question: string;
  @Input() username: string;
  @Input() days_remaining: number;
  @Input() number_of_likes: number;
  @Input() number_of_comments: number;
  type: string = 'featured';
  @Input() postId: any;
  @Input() comments: any[];
  commentKeys: any[];

  showComments: boolean = false;
  ngOnInit() {
    this.title.setTitle('Archived');
    this.commentKeys = Object.keys(this.comments);
    // console.log(this.question, this.commentKeys.length);
  }

  onClickComments() {
   this.showComments = !this.showComments;
  }

}
