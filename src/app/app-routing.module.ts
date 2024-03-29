import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const USER_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m=> m.UserModule)
  }
]

const PUBLIC_ROUTES: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m=>m.PublicModule)
  }
]

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m=> m.AdminModule)
  }
]
const routes: Routes = [
  {
    path: '', component:UserLayoutComponent,
    children: USER_ROUTES
  },
  {
    path: '', component:PublicLayoutComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: '', component:AdminLayoutComponent,
    children: ADMIN_ROUTES
  },
  // {path:'admin',component:AddProductComponent},
  {path:'**',pathMatch: 'full', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
