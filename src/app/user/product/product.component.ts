import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';
export interface Datastore {
  title?: string;
  id?: number;
  description?: string;
  price?: number;
  image?: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: any = [];


  constructor(private dataservice: DataService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.getdata()
  }
  
  getdata() {
    this.dataservice.getPosts().subscribe((res: any) => {
      this.productList = res
    })
  }

  addProduct(listdata: any) {
    const payload =
    {

      image: listdata.image,
      title: listdata.title,
      description: listdata.description,
      price: listdata.price

    }
    this.cartservice.createPost(payload);
    console.log(payload)

  }
}