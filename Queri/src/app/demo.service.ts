import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './_models/data';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) {}

    getPostInType(type, post_id) : Observable<Post>{
        return this.http.get<Post>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/");

    }

    getCommentsInPostInView(type, post_id): Observable<Comment[]> {
// tslint:disable-next-line: max-line-length
        return this.http.get<Comment[]>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/comments/");
    }
    getCommentInPostInView(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/" + post_id + "/comments/" + comment_id + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }
    getUsernameOfCommentInPostInView(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/" + post_id + "/comments/" + comment_id + "/username/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }
    getContentOfCommentInPostInView(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/"+ post_id + "/comments/" + comment_id + "/content/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }

    getAll(type): Observable<Post[]> {
        return this.http.get<Post[]>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/");
        /*
        .subscribe((data:any[])=>{
            console.log(data);
        });*/
    }
/*
    getCategory(type, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }*/
    getRecent(type) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }
    getRecentCount(type, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/" + type + "/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }
    getArchived(type) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }
    getArchivedCount(type, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }
    getVotes(type, post_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/meta/likes/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }

    // AddComment(username,content){
    //   const body= {
    //   "username":username,
    //   "content":content
    //   }
    //   this.http.post('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/category1/0/comments/new/', body).subscribe((data:any[])=>{
    //       console.log(data);
    //   })

    // }

    AddComment(username, content, type, count){
        const body= {
        "username":username,
        "content":content
        }
        this.http.post("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + count + "/comments/new/", body).subscribe((data:any[])=>{
            console.log(data);
        });
    }


/***** 
    AddComment(username,content){
    //   const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization' : this.idToken
    //   })
    // };
    //   this.httpClientObj.get('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/category1/0/comments/new/', httpOptions);
      const body= {
      "username":username,
      "content":content
      }
*/
    AddLike(type, post_id){

        this.http.put('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/' + type +  '/' + post_id + '/meta/like', {}).subscribe((data:any[])=>{
        console.log(data);
      })

    }

    // arugment type is not used in the function???
    AddNewPost(username, content, type?){
        const body = {
            "username":username,
            "content":content
        }
        this.http.post('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/' + name + '/' + 'new/', body).subscribe((data:any[])=>{
        console.log(data);
    })

    }
}
