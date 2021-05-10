import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component'
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';
import { PostComponent } from './post/post.component';
import { ReplyComponent } from './reply/reply.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'apply', component: ApplyComponent},
  {path: 'post', component: PostComponent},
  {path: 'reply/:id', component:ReplyComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'status', component:StatusComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'admin-login',component:AdminLoginComponent},
  {path: 'home',component:HomeComponent},
  {path: 'viewprofile', component:ViewprofileComponent},
  {path: 'viewapplication', component:ViewapplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
