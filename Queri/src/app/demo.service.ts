import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';

=======
import {Observable} from 'rxjs';
>>>>>>> 72c44f312ff498c5712c0e8619a8db016958e175

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {
<<<<<<< HEAD
 
 	
    constructor(private http: HttpClient) {}
 	private _url: string = "https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/category1";
 	
    // Uses http.get() to load data from a single API endpoint
    getFoods () {
        return this.http.get(this._url)
=======

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint

    getPostInCategory(name, post_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/" + post_id + "/")
>>>>>>> 72c44f312ff498c5712c0e8619a8db016958e175
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
<<<<<<< HEAD
    
=======
    getCommentsInPostInCategory(name, post_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/"+ post_id + "/comments/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getCommentInPostInCategory(name, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/"+ post_id + "/comments/" + comment_id + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getUsernameOfCommentInPostInCategory(name, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/"+ post_id + "/comments/" + comment_id + "/username/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getContentOfCommentInPostInCategory(name, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/"+ post_id + "/comments/" + comment_id + "/content/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getCategories() {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getAllInCategory(name) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
>>>>>>> 72c44f312ff498c5712c0e8619a8db016958e175




<<<<<<< HEAD
   

}
=======











    getCategory(name, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getRecent() {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/recent")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getRecentCount(count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/recent/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getArchived() {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/archived/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getArchivedCount() {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/archived/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getVotes(name, p_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/" + name + "/" + p_id + "/meta/votes/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }




    pos

}
>>>>>>> 72c44f312ff498c5712c0e8619a8db016958e175
