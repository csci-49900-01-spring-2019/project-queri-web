import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: string;

  constructor(private _demoService: DemoService) { 

      _demoService.getPostInCategory("category1","0");

  }

  ngOnInit() {
  }

}
