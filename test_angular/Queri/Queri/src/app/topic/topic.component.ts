import { Component, OnInit } from '@angular/core';
import {NgModule, Input}      from '@angular/core';

export class Topic{
  public name: string;

  constructor(type: string){
    this.name = type;
  }
}

@Component({
  selector: 'topic', //was app-topic
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input('topic') data: Topic;

  constructor() {
  }

  ngOnInit() {
  }

}
