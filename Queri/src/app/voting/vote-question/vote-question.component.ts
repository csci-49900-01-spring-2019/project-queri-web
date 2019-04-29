import { Component, OnInit, Input } from '@angular/core';
import { DemoService } from '../../demo.service';


@Component({
  selector: 'app-voting-question',
  templateUrl: './vote-question.component.html',
  styleUrls: ['./vote-question.component.css']
})
export class VoteQuestionComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  @Input() question: string;
  @Input() username: string;
  @Input() days_remaining: number;
  @Input() number_of_likes: number;
  @Input() number_of_comments: number;
  type: string = 'featured';
  @Input() postId: any;

  ngOnInit() {
  }

  onLike(){
    this.demoService.AddLike(this.type, this.postId);
  }

}
