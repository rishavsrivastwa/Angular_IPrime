import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
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
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  localUrl!: any[];



  productDetails:any = {
    title:'',
    id:'',
    description:'',
    price:'',
    image:'',
    category:'',
  };

  productList:any[] = []

  constructor(private dataservice:DataService) { }
  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.localUrl = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }
}

  ngOnInit(): void {
    
  }

  addProduct(postData:NgForm){
    const payload = {
      id: postData.value.id,
      title: postData.value.title,
      description: postData.value.description,
      price : postData.value.price,
      image: postData.value.image,
      category: postData.value.category
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
  

}
