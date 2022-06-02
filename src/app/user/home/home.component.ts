import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';

// export interface Cart{
//   title?:string;
//   id?:string;
//   description?:string;
//   price?:string;
//   image?:string;
// }

export interface Datastore {
  title?: string;
  id?: number;
  description?: string;
  price?: number;
  image?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent implements OnInit {
//   datalist:Cart[]=[]

//   constructor(private cartservice:CartService) { }

//   ngOnInit(): void {
//   }
//   productList =[
//     {
//       id:'1',
//       title:'Iphone 13',
//       price: 74999,
//       description: '128 GB, Green',
//       category: 'Iphone',
//       image:'/assets/img/iphone13_green.jfif'
//     },
//     {
//       id:'2',
//       title:'Iphone 13',
//       price: 76000,
//       description: '128 GB, Pink',
//       category: 'Iphone',
//       image:'/assets/img/iphone13_.jpg'
//     },
//     {
//       id:'3',
//       title:'Iphone 11',
//       price: 49000,
//       description: '64 GB, White',
//       category: 'Iphone',
//       image:'/assets/img/iphone11_white.jfif'
//     },
//     {
//       id:'4',
//       title:'Iphone SE',
//       price: 32000,
//       description: '32 GB, Grey',
//       category: 'Iphone',
//       image:'/assets/img/iphone_se.jfif'
//     },
//     {
//       id:'5',
//       title:'Iphone 12',
//       price: 59999,
//       description: '128 GB, Purple',
//       category: 'Iphone',
//       image:'/assets/img/iphone12_.jfif'
//     },
//     {
//       id:'6',
//       title:'Thunderbolt',
//       price: 1999,
//       description: '4 Pro cable (1.8m)',
//       category: 'accessoriers',
//       image:'/assets/img/cable1.png'
//     },
//     {
//       id:'7',
//       title:'Mouse',
//       price: 9999,
//       description: 'Magic Mouse',
//       category: 'accessoriers',
//       image:'/assets/img/mouse1.png'
//     },
//     {
//       id:'8',
//       title:'Keyboard',
//       price: 12999,
//       description: 'Magic With Touch',
//       category: 'accessories',
//       image:'/assets/img/keyboard1.png'
//     },
//     {
//       id:'9',
//       title:'Trackpad',
//       price: 10999,
//       description: 'Magic Trackpad',
//       category: 'accessories',
//       image:'/assets/img/trackpad1.png'
//     },
//     {
//       id:'10',
//       title:'USB-C ',
//       price: 3999,
//       description: 'Digital AV Adapter',
//       category: 'accessories',
//       image:'/assets/img/usb_c_1.png'
//     },
//     {
//       id:'11',
//       title:'USB-C',
//       price: 2999,
//       description: 'USB-C to USB-Adapter',
//       category: 'accessories',
//       image:'/assets/img/usb_c_2.png'
//     },
//     {
//       id:'12',
//       title:'USB-C',
//       price: 2999,
//       description: 'USC-C to MagSage 3 Cable',
//       category: 'accessories',
//       image:'/assets/img/usb_c_3.png'
//     },
//     {
//       id:'15',
//       title:'I Watch',
//       price: 18999,
//       description: '32 mm',
//       category: 'accessories',
//       image:'/assets/img/w5.jpg'
//     },
//     {
//       id:'16',
//       title:'I Watch',
//       price: 15999,
//       description: '44 mm',
//       category: 'accessories',
//       image:'/assets/img/w6.jpg'
//     },
//     {
//       id:'17',
//       title:'I Watch',
//       price: 17999,
//       description: '32 mm',
//       category: 'accessories',
//       image:'/assets/img/w7.jpg'
//     },
//     {
//       id:'18',
//       title:'I Watch',
//       price: 16999,
//       description: '44 mm',
//       category: 'accessories',
//       image:'/assets/img/w8.jpg'
//     },
//   ]
//   getproduct(){
//     this.cartservice.getPosts().subscribe((res:any)=>{
//       this.datalist=res
//     })
//   }
//   addProduct(listdata:any){
//     const payload=
//     {

//       image:listdata.image,
//       title:listdata.title,
//       description:listdata.description,
//       price:listdata.price

//     }
//     this.cartservice.createPost(payload);
//     console.log(payload)

//   }

// }


export class HomeComponent implements OnInit {
  productList: any = [];

  constructor(private dataservice: DataService, private cartservice: CartService) { 
    
  }


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