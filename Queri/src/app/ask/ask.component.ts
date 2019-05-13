
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
  providers: []
})
export class AskComponent implements OnInit {

  constructor(private title: Title) { }
  ngOnInit() {
    this.title.setTitle('Ask');
  }

}
