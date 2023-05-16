import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CartComponent } from './components/cart/cart.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilterStoreComponent } from './components/filter-store/filter-store.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { ProductsComponent } from './components/products/products.component';
import { StripeContainerComponent } from './components/stripe-container/stripe-container.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StoreComponent } from './pages/store/store.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o'; // Import OwlCarouselModule
import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel'; // Add this line

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CartComponent,
    CartCardComponent,
    CardComponent,
    BannerComponent,
    DashboardComponent,
    FilterStoreComponent,
    FooterComponent,
    NavbarComponent,
    OrdersComponent,
    OrderItemsComponent,
    ProductsComponent,
    StripeContainerComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    StoreComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule, // Add RouterModule
    CarouselModule, // Add OwlCarouselModule to the imports array
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
