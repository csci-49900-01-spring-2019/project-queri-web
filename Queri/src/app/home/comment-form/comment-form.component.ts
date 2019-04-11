import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  username = 'Jimmi76';
  comment: string;
  hideForm = true;

  log(x){
    console.log("Comment: " + x.control.value);
    this.comment = x.control.value;
  }

  onSubmit() {
    //this.demoService.AddComment(this.username, this.comment);
    console.log("Button clicked");
  }

  ngOnInit() { }

}
