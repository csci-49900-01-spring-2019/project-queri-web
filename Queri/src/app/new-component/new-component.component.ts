import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
 selector: 'app-new-component',
 templateUrl: './new-component.component.html',
 styleUrls: ['./new-component.component.css']
})



export class NewComponentComponent implements OnInit {  constructor(private authService : AuthService){ }  

	ngOnInit() {
 
	}
}
