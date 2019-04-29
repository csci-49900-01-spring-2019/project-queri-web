import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  username: string = 'NotKevin';
  comment: string;
  @Input() hidden: boolean;
  @Output() event: EventEmitter<boolean> = new EventEmitter();

  foo: false;

  log(x: any) {
    console.log('Comment: ' + x.control.value);
    this.comment = x.control.value;
  }

  sendToParent() {
    this.event.emit(this.foo);
  }

  onSubmit() {
    // What is count???
<<<<<<< HEAD
    this.demoService.AddComment(this.username, this.comment, 'featured', 10);
=======
     this.demoService.AddComment(this.username, this.comment, 'featured', 10);
>>>>>>> ee91b81bce979af0ed2b4ac03382f07918d6ef2c
    console.log('Button clicked');

  }

  ngOnInit() { }

}
