import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DemoService } from '../../demo.service';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  username: string = 'ANONYMOUS';
  comment: string = '';
  @Input() hidden: boolean;
  @Input() key: string;
  @Output() event: EventEmitter<boolean> = new EventEmitter();
  type = 'featured'

  foo: false;

  log(x: any) {
    console.log('Comment: ' + x.control.value);
    this.comment = x.control.value;
  }

  sendToParent() {
    this.event.emit(this.foo);
  }

  state: any;

  onSubmit() {
    if(this.comment.length > 0){
      this.demoService.AddComment(this.username, this.comment, this.type, this.key)
      .subscribe((data:any[])=>{
        console.log(data);
        this.state = data;
        console.log(this.state);
        console.log(this.state[0]);
    });
    }else{
      console.log('Empty Comment');
    }
    console.log('Button clicked');
  }

  ngOnInit() {
    console.log('Key: ', this.key);
  }

}
