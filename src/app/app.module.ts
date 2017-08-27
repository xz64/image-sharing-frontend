import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user/user.service';
import { ImageService } from './image/image.service';
import { LoggedInGuard } from './guard/logged-in.guard';
import { NotLoggedInGuard } from './guard/not-logged-in.guard';
import { UserImagesComponent } from './user-images/user-images.component';
import { MyImagesComponent } from './my-images/my-images.component';
import { ImageTileComponent } from './image/image-tile/image-tile.component';
import { ImageTileGridComponent } from './image/image-tile-grid/image-tile-grid.component';
import { RoutedUserImagesComponent } from './routed-user-images/routed-user-images.component';
import { ImageWithFallbackComponent } from './image-with-fallback/image-with-fallback.component';
import { AllUserImagesComponent } from './all-user-images/all-user-images.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    UserImagesComponent,
    MyImagesComponent,
    ImageTileComponent,
    ImageTileGridComponent,
    RoutedUserImagesComponent,
    ImageWithFallbackComponent,
    AllUserImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MasonryModule
  ],
  providers: [
    UserService,
    ImageService,
    LoggedInGuard,
    NotLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
