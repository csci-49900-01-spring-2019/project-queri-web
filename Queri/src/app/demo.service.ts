import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './_models/data';
import { Status } from './_models/status';
import { Result } from './_models/result';

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
    getVotes (type, post_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/meta/likes/");
        /*
        .subscribe((data:any[])=>{
            console.log(data);
        });
        */
    }

    getUserPosts (uid) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/" + "/users/" + uid + "posts/")
        .subscribe((data:any[])=>{
            console.log(data);
        });
    }

    createUser(idToken): Observable<Status>{
        console.log(idToken);
        const httpOptions = {
        headers: new HttpHeaders({
        'Authorization' : idToken
        })
    };
   
        return this.http.post<Status>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/users/new/", httpOptions);
        
        // .subscribe((data:any[])=>{
        //     console.log(idToken);
        // });
    }

    AddComment(username, content, type, count): Observable<Status>{
        const body= {
        "username": username,
        "content": content
        }
        return this.http.post<Status>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + count + "/comments/new/", body);
        /*
        .subscribe((data:any[])=>{
            console.log(data);
        });*/
    }


/****
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
    AddLike(type, post_id): Observable<Result> {
        return this.http.put<Result>('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/' + type +  '/' + post_id + '/meta/like', {});
    }

    AddNewPost(username, content, type?): Observable<Status> {
        const body = {
            "username": username,
            "content": content
        };

        return this.http.post<Status>('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/voting/' + 'new/', body);
    }
}
