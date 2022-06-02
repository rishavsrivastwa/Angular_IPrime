import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { CartComponent } from './cart/cart.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {  AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component';
import { ProductDesComponent } from './product-des/product-des.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LikeProductComponent } from './like-product/like-product.component';
// import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    OffersComponent,
    CartComponent,
    FooterComponent,
    ProductDesComponent,
    ContactUsComponent,
    LikeProductComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    // NgxImageZoomModule
  
  ]
})
export class UserModule { }
