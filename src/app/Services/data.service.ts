import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

export interface Datastore{
  title:string;
  id:number;
  description:string;
  price:number;
  image:string;
  category:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    throw new Error('Method not implemented.');
  }
  dataCollection: AngularFirestoreCollection<Datastore> | any;
  datas: Observable<Datastore[]> | any;
  documentReference: AngularFirestoreDocument<Datastore> | any;

  constructor(private fireStore:AngularFirestore, private auth:AngularFireAuth,private router:Router) { 
    this.dataCollection = this.fireStore.collection('Data');
    
    this.datas = this.dataCollection.snapshotChanges()
    .pipe(
      map((changes: any) =>{
        return changes.map((ref: any)=> {
          const data = ref.payload.doc.data() as Datastore;
          data.id = ref.payload.doc.id;
          return data;
        });
      })
    );
  }

  getPosts():any {
    return this.datas;
  }
  createPost(payload: any): any {
    this.dataCollection.add(payload);
  }
}
