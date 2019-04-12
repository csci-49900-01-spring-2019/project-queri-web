import { Component, OnInit ,Input} from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  
})
export class QuestionComponent implements OnInit {

  @Input() question: string;
  @Input() username: string;
  @Input() days_remaining: number;
  @Input() number_of_likes: number;
  @Input() number_of_comments: number;
  constructor() { }
  ngOnInit() { }


  
}
