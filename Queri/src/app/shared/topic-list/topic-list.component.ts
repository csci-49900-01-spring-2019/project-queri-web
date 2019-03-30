import { Topic } from './topic/topic.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Topic[];

  constructor() { 
    this.topics = [
      new Topic("1"),
      new Topic("2"),
      new Topic("3"),
      new Topic("4"),
      new Topic("5") 
    ];

  }


  ngOnInit() {
  }

}
