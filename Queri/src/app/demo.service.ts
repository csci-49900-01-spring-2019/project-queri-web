import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './shared/Data';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) {}

    // Uses http.get() to load data from a single API endpoint

    // getPostInView(name, post_id) : Observable<Post>{
    //     return this.http.get<Post>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/" + name + "/" + post_id + "/");
    //         //.pipe();
        
    // }
    // getCommentsInPostInView(name, post_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/" + name + "/"+ post_id + "/comments/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getCommentInPostInView(name, post_id, comment_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/"  + name + "/"+ post_id + "/comments/" + comment_id + "/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getUsernameOfCommentInPostInView(name, post_id, comment_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/"  + name + "/"+ post_id + "/comments/" + comment_id + "/username/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getContentOfCommentInPostInView(name, post_id, comment_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/"  + name + "/"+ post_id + "/comments/" + comment_id + "/content/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getAll() {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getAllInView(name) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/"  + name + "/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }

    // getCategory(name, count) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/" + name + "/" + count + "/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getRecent() {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/recent")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getRecentCount(count) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/recent/" + count + "/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getArchived() {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/archived/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getArchivedCount() {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/archived/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getVotes(name, p_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/" + name + "/" + p_id + "/meta/votes/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }




    getPostInType(type, post_id) : Observable<Post>{
        return this.http.get<Post>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/");
            //.pipe();
        
    }
    getCommentsInPostInView(type, post_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/comments/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getCommentInPostInView(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/" + post_id + "/comments/" + comment_id + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getUsernameOfCommentInPostInView(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/" + post_id + "/comments/" + comment_id + "/username/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getContentOfCommentInPostInView(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/"+ post_id + "/comments/" + comment_id + "/content/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }

    getAll(type) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
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
        })
    }
    getRecentCount(type, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posgetAll/" + type + "/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getArchived(type) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getArchivedCount(type, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getVotes(type, post_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/meta/likes/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
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
        })
  
      }

    AddLike(type, post_id){

        this.http.put('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/' + type +  '/' + post_id + '/meta/like', {}).subscribe((data:any[])=>{
        console.log(data);
      })
 
    }

    AddNewPost(username, content, type){
        const body = {
            "username":username,
            "content":content
        }
        this.http.post('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/' +  type + '/' + 'new/', body).subscribe((data:any[])=>{
        console.log(data);    
    })
    
    }
}
