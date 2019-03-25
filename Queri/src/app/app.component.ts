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
<<<<<<< HEAD
 
  constructor(private _demoService: DemoService) { 
	_demoService.getFoods();
=======

  constructor(private _demoService: DemoService) {

    _demoService.getCommentsInPostInCategory("category1", "0");
>>>>>>> 72c44f312ff498c5712c0e8619a8db016958e175
  }



}
