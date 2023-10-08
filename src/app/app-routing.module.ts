import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageComponent } from './components/app-page/app-page.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'', component: AppPageComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'category/:category', component:AppPageComponent},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
