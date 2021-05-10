import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null,[
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }
  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }

 else if(this.loginForm.username == "admin" && this.loginForm.password == "admin"){
      this.router.navigate(['/admin'])
    }else{
      alert("You are not registerd as admin!!")
    }
  }
}
