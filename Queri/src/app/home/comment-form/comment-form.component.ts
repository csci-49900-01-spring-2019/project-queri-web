import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
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
  
  @Input() hidden: boolean;
  @Output() event: EventEmitter<boolean> = new EventEmitter();

  foo: false;
  // Default should be false
  // hideForm = true;

  log(x){
    console.log("Comment: " + x.control.value);
    this.comment = x.control.value;
    
  }

  sendToParent(){
    this.event.emit(this.foo);
    console.log("FOOOOOOO");
  }

  onSubmit() {
    //this.demoService.AddComment(this.username, this.comment);
    console.log("Button clicked");
    
  }

  ngOnInit() { }

}
