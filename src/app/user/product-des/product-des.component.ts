import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
export interface Data {
  title?: string;
  id?: string;
  description?: string;
  price?: string;
  image?: string;
  user?:string;
  email?:string;
  password?:string;
 
}

@Component({
  selector: 'app-product-des',
  templateUrl: './product-des.component.html',
  styleUrls: ['./product-des.component.css']
})
export class ProductDesComponent implements OnInit {
  title:string=''
  price:string=''
  img:string=''
  des:string=''
  totalItem: any;

  constructor(private active:ActivatedRoute,private router:Router,private cartservice:CartService) { }

  ngOnInit(): void {
    this.title=this.active.snapshot.params['title']
    this.price=this.active.snapshot.params['price']
    this.img=this.active.snapshot.params['image']
    this.des=this.active.snapshot.params['description']

    this.imageZoom("myimage", "myresult", "lens")

    this.cartservice.getPosts().subscribe((res:any)=>{
      this.totalItem=res.length;
    })
  }
  
  addProduct(){
    const payload=
    {
      
      image:this.img,
      title:this.title,
      description:this.des,
      price:this.price
      
    }
    this.cartservice.createPost(payload);
    console.log(payload)
    
  }

  likebutton(){
    alert("You like this Product");
  }

  imageZoom(imgID: string, resultID: string, lensid: string) {

    let img: any = document.getElementById(imgID);
    let result: any = document.getElementById(resultID);
    let lens: any = document.getElementById(lensid)
    let cx = result.offsetWidth / lens.offsetWidth;
    let cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = "url('" + this.img + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    // lens.addEventListener("mousemove", moveLens);
    result.addEventListener("mousemove",moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e:any) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - (result.offsetWidth / 2);
      y = pos.y - (result.offsetHeight / 2);
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - result.offsetWidth) {x = img.width - result.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - result.offsetHeight) {y = img.height - result.offsetHeight;}
      if (y < 0) {y = 0;}
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e:any) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }
  

}
