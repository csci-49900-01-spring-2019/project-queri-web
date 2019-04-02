import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataModel } from './shared/Data';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) {}

    // Uses http.get() to load data from a single API endpoint

    getPostInCategory(name, post_id) : Observable<dataModel>{
        return this.http.get<dataModel>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/" + post_id + "/");
            //.pipe();
        
    }
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
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/" + p_id + "/meta/votes/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }

    AddComment(username,content){
      const body= {
      "username":username,
      "content":content
      }
      this.http.post('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/category1/0/comments/new/', body).subscribe((data:any[])=>{
          console.log(data);
      })

    }

    AddLike(name, post_id){

        this.http.put('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/' + name + '/' + post_id + '/meta/like', {}).subscribe((data:any[])=>{
        console.log(data);
      })
 
    }

}
