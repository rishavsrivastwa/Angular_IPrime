import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

export interface Datastore{
  title:string;
  id:number;
  description:string;
  price:number;
  image:string;
  category:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any = [];
  postForm:FormGroup;
  localUrl!: any[];

  productDetails:any = {
    title:'',
    id:'',
    description:'',
    price:'',
    image:'',
    category:'',
  };

 


  constructor(private dataservice:DataService,private fromBuilder: FormBuilder) {
    this.postForm = this.fromBuilder.group({
      id: new FormControl(''),
      title: new FormControl(''),
      category:new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.getdata()
  }
  addProduct(){
    const payload = {
      id: this.postForm.value.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      price : this.postForm.value.price,
      image: this.postForm.value.image,
      category: this.postForm.value.category
    }
    console.log(payload)
    this.dataservice.createPost(payload);
    alert("Items added successfully")
    this.productDetails = {
      id:"",
      title:"",
      description:"",
      price:"",
      image:"",
      category:""
    }
  }
  getdata() {
    this.dataservice.getPosts().subscribe((res: any) => {
      this.productList = res
    })
  }

  deletePost(listdata: any): void {
    this.dataservice.deletePost(listdata);
  }
  editPost(listdata:any){
    this.postForm.get("id")?.setValue(listdata.id);
    this.postForm.get("title")?.setValue(listdata.title);
    this.postForm.get("category")?.setValue(listdata.category);
    this.postForm.get("image")?.setValue(listdata.image);
    this.postForm.get("price")?.setValue(listdata.price);
    this.postForm.get("description")?.setValue(listdata.description);
  }

}
