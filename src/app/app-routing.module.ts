import { RoutedUserImagesComponent } from './routed-user-images/routed-user-images.component';
import { MyImagesComponent } from './my-images/my-images.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './guard/logged-in.guard';
import { NotLoggedInGuard } from './guard/not-logged-in.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
  { path: 'images', component: MyImagesComponent, canActivate: [LoggedInGuard] },
  { path: 'images/:userId', component: RoutedUserImagesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
