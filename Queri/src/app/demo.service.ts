import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
 
 	
    constructor(private http: HttpClient) {}
 	private _url: string = "https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/category1";
 	
    // Uses http.get() to load data from a single API endpoint
    getFoods () {
        return this.http.get(this._url)
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    




   

}