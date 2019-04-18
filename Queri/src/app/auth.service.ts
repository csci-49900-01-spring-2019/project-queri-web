import { Injectable } from  '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { User } from  'firebase';

@Injectable({
    providedIn:  'root'
})
export  class  AuthService {

  constructor(public afAuth: AngularFireAuth){

  }


  doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      console.log(res);
    })
  })
}




/*    user:  User;
    constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {


      this.afAuth.authState.subscribe(user => {
  if (user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  } else {
    localStorage.setItem('user', null);
  }
})

    }

    async  login(email:  string, password:  string) {

try {
    await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['admin/list']);
} catch (e) {
    alert("Error!"  +  e.message);
}
}

async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
}
get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}
*/



}
