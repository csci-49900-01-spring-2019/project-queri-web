import { Component, OnInit, Input } from '@angular/core';
import { DemoService } from '../demo.service';
import { dataModel} from '../shared/Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DemoService]
})
export class HomeComponent implements OnInit {
  
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
