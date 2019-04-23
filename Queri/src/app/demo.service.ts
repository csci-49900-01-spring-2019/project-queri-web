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

    // getPostInCategory(name, post_id) : Observable<Post>{
    //     return this.http.get<Post>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/" + post_id + "/");
    //         //.pipe();
        
    // }
    // getCommentsInPostInCategory(name, post_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/"+ post_id + "/comments/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getCommentInPostInCategory(name, post_id, comment_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/"+ post_id + "/comments/" + comment_id + "/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getUsernameOfCommentInPostInCategory(name, post_id, comment_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/"+ post_id + "/comments/" + comment_id + "/username/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getContentOfCommentInPostInCategory(name, post_id, comment_id) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/"+ post_id + "/comments/" + comment_id + "/content/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getCategories() {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }
    // getAllInCategory(name) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/"  + name + "/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }

    // getCategory(name, count) {
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/" + count + "/")
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
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/recent/" + count + "/")
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
    //     return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + name + "/" + p_id + "/meta/votes/")
    //     .subscribe((data:any[])=>{
    //         console.log(data);
    //     })
    // }


    getPostInCategory(type, post_id) : Observable<Post>{
        return this.http.get<Post>("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/");
            //.pipe();
        
    }
    getCommentsInPostInCategory(type, post_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + post_id + "/comments/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getCommentInPostInCategory(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/" + post_id + "/comments/" + comment_id + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getUsernameOfCommentInPostInCategory(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/" + post_id + "/comments/" + comment_id + "/username/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getContentOfCommentInPostInCategory(type, post_id, comment_id) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/"+ post_id + "/comments/" + comment_id + "/content/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }

    getCategories(type) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/"  + type + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }

    getCategory(type, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/" + count + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getRecent(type) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/" + type + "/")
        .subscribe((data:any[])=>{
            console.log(data);
        })
    }
    getRecentCount(type, count) {
        return this.http.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + type + "/" + count + "/")
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
    //   this.http.post('https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/category1/0/comments/new/', body).subscribe((data:any[])=>{
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
