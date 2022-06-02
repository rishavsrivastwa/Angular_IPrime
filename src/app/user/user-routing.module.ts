import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LikeProductComponent } from './like-product/like-product.component';
import { OffersComponent } from './offers/offers.component';
import { ProductDesComponent } from './product-des/product-des.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'offers',component:OffersComponent},
  {path:'cart',component:CartComponent},
  {path:'pro/:title/:price/:image/:description',component: ProductDesComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'contact',component: ContactUsComponent},
  {path: 'wishlist',component: LikeProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
