import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';

export interface Cart {
  title?: string;
  id?: string;
  description?: string;
  price?: string;
  image?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem:number=0;

  products: any = [];

  total: any;


  constructor(public auth: FirebaseAuthService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getPosts().subscribe((res:any)=>{
      this.totalItem=res.length;
    })
    // this.getdata()
  }

  logout(){
    this.auth.logout();
  }
  // getdata() {
  //   this.cartService.getPosts().subscribe((res: any) => {
  //     this.products = res
  //     this.total = this.grandTotal()
  //     this.products.forEach((a: any) => {
  //       Object.assign(a, { quantity: 1, total: a.price });

  //     })

  //   })
  // }
  // deletePost(listdata: any): void {
  //   this.cartService.deletePost(listdata);
  // }

  // grandTotal() {
  //   let total = 0;
  //   this.products.map((a: any) => {
  //     total += a.price
  //   })
  //   return total

  // }
  // inc(val: any) {
  //   val.quantity += 1
  //   console.log(val.quantity)
  //   console.log(this.products)
  // }

  // dec(val: any) {
  //   if (val.quantity != 1)
  //     val.quantity -= 1
  // }

}
