import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { dataModel} from '../shared/Data';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [DemoService]
})
export class QuestionComponent implements OnInit {

  post: dataModel;
  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void{
    this.demoService.getPostInCategory('category1', '0')
      .subscribe(post => this.post = post);
  }
}
