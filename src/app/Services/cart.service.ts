import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

export interface Cart{
  title?:string;
  id?:string;
  description?:string;
  price?:string;
  image?:string; 
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getProducts() {
    throw new Error('Method not implemented.');
  }
  postsCollection: AngularFirestoreCollection<Cart> | any;

  posts: Observable<Cart[]> | any;

  documentRefernce:AngularFirestoreDocument<Cart>|any;

  constructor(private fireStore:AngularFirestore,private auth:AngularFireAuth,private router:Router) {
    this.postsCollection = this.fireStore.collection('Cartdata');

    this.posts = this.postsCollection.snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map((ref: any) => {
            const data = ref.payload.doc.data() as Cart;
            data.id = ref.payload.doc.id;
            return data;
          });
        })
      );
   }

   getPosts(): any {
    return this.posts;
  }
  createPost(payload: any): any {
    this.postsCollection.add(payload);
  }

  deletePost(payload:any):any{
    this.documentRefernce=this.fireStore.doc('Cartdata/'+payload.id);
    this.documentRefernce.delete()
  }
}
