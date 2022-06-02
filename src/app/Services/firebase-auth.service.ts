import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  email: any;
  password: any;
  user$: Observable<firebase.User|null>;
  constructor(private auth:AngularFireAuth,private router:Router) { 
    this.user$ = auth.authState;
    this.auth.authState.subscribe(userResponse =>{
      if(userResponse){
        localStorage.setItem('user',JSON.stringify(userResponse));
      }
      else{
        localStorage.setItem('user','{}');
      }
    })
  }

  GoogleAuth() {

   return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

 }  



 signUp(email: string, password: string, username: string) {
  alert('Registration Sucessful')
  return this.auth.createUserWithEmailAndPassword(email, password).then((result)=>{
    result.user?.updateProfile({displayName:username})
    this.router.navigate(['public/log-in'])
  })
   
 }
 signIn(email:string,password:string){
   this.auth.signInWithEmailAndPassword(email,password).then(()=>{
     localStorage.setItem('token','true')
     this.router.navigate(['/'])
   },err=>{
     alert('Something went wrong')
   
   });
 }
logout() {
  this.auth.signOut().then(() => {
    localStorage.setItem('token','false')
    this.router.navigate(['/']);
  });
  }
}