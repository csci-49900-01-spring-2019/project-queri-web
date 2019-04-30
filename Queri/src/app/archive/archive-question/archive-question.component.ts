import { Component, OnInit, Input } from '@angular/core';
// import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-archive-question',
  templateUrl: './archive-question.component.html',
  styleUrls: ['./archive-question.component.css']
})
export class ArchiveQuestionComponent implements OnInit {

  constructor() { }

  @Input() question: string;
  @Input() username: string;
  @Input() days_remaining: number;
  @Input() number_of_likes: number;
  @Input() number_of_comments: number;
  type: string = 'featured';
  @Input() postId: any;

  showComments: boolean = false;
  
  ngOnInit() {
  }

  onClickComments(){
   this.showComments = !this.showComments;
  }

}
