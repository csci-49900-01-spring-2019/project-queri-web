import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DemoService } from '../../demo.service';
import 'rxjs/add/operator/toPromise';
import {Status} from '../../_models/status';


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
  type = 'featured';

  foo: false;
  state: Status;

  log(x: any) {
    // console.log('Comment: ' + x.control.value);
    this.comment = x.control.value;
  }

  sendToParent() {
    this.event.emit(this.foo);
  }

  async onSubmit() {
    if (this.comment.length > 0) {
      await this.demoService.AddComment(this.username, this.comment, this.type, this.key)
      .subscribe( data => {
        // console.log(data);
        this.state = data;
        // console.log(this.state);
        // console.log(this.state.status);
        if (this.state.status === 'success') {
          this.sendToParent();
        }
    });
    } else {
      // console.log('Empty Comment');
    }
    // console.log('Button clicked');
  }

  ngOnInit() {
  // console.log('Key: ', this.key);
  }

}
