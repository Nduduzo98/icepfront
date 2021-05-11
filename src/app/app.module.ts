import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupComponent} from './signup/signup.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';

import { AuthService } from './auth.service';
import { ApplyComponent } from './apply/apply.component';
import { PostComponent } from './post/post.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReplyComponent } from './reply/reply.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ApplyComponent,
    PostComponent,
    ViewprofileComponent,
    ViewapplicationComponent,
    DashboardComponent,
    ReplyComponent,
    StatusComponent,
    ProfileComponent,
    AdminComponent,
    AdminLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule
    
  ],
  entryComponents:[ApplyComponent,ViewapplicationComponent,ViewprofileComponent,PostComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
