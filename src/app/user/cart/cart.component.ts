import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

export interface Cart {
  title?: string;
  id?: string;
  description?: string;
  price?: string;
  image?: string;
 
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any = [];

  total: any;
 

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getdata()
    this.grandTotal()
  }
  getdata() {
    this.cartService.getPosts().subscribe((res: any) => {
      this.products = res
      this.total = this.grandTotal()
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });

      })

    })
  }
  deletePost(listdata: any): void {
    this.cartService.deletePost(listdata);
  }


  inc(val: any) {
    val.quantity += 1
   
  }

  dec(val: any) {
    if (val.quantity != 1)
      val.quantity -= 1
     
  }
  sum(val:any){
    let totalprice=0
    totalprice=val.price * val.quantity
    return totalprice

  }
  grandTotal(){
    let sum = 0;
    for(let product of this.products){
      sum+= product.quantity*product.price
    }
    return sum;
  }

}
