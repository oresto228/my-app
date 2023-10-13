import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { AppPageComponent } from './components/app-page/app-page.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppCategoryPageComponent } from './components/app-category-page/app-category-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    AppPageComponent,
    AppFooterComponent,
    AppCategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
