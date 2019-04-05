import { Component, OnInit ,Input} from '@angular/core';
import { DemoService } from '../../demo.service';
import { dataModel} from '../../shared/Data';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  
})
export class QuestionComponent implements OnInit {

  @Input() question: string;
  constructor() { }
  ngOnInit() { }

  
}
