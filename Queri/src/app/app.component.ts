import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  public foods;
 
  constructor(private _demoService: DemoService) { 
	_demoService.getFoods();
  }
  
  
  
}
