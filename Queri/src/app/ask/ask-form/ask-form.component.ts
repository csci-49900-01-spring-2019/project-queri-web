import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import { ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {Status} from '../../_models/status';

@Component({
  selector: 'app-ask-form',
  templateUrl: './ask-form.component.html',
  styleUrls: ['./ask-form.component.css']
})
export class AskFormComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  username = 'NotKevin';

  question: string;

  result: Status;
  @ViewChild('question') form: any;

  log(x) {
    console.log(x);
    this.question = x.control.value;
    // console.log('Question: ' + this.question);
   }

  async onSubmit() {
    await this.demoService.AddNewPost(this.username, this.question)
      .subscribe( data => {
        this.result = data;
        console.log(this.result);
      });
    // console.log('Button clicked');
    this.form.reset();
  }
  ngOnInit() {
  }

}
