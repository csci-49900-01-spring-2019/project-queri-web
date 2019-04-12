import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: string;
  @Input() username: string;
  
  @Input() hidden: boolean;
  constructor() { }

  // Default should be true
  // hideComments = false;

  ngOnInit() { }

}
