import { Component, OnInit } from '@angular/core';


export class Question{
  public question: string;

  constructor(line: string){
    this.question = line;
  }
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  a_Question: Question;

  constructor() { }

  ngOnInit() {
  }

}
