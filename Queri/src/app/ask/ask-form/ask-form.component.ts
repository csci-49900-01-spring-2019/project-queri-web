import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-ask-form',
  templateUrl: './ask-form.component.html',
  styleUrls: ['./ask-form.component.css']
})
export class AskFormComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  username = 'Jimmi76';
  name = 'Jimmy';
  question: string;

  log(x) { 
    console.log(x);
    this.question = x.control.value;
    console.log("Question: " + this.question);
   };

  onSubmit() {
    //this.demoService.AddNewPost(this.username, this.question, this.name);
    console.log("Button clicked");
  }
  ngOnInit() {
  }

}