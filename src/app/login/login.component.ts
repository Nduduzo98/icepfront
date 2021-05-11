import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: any;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[
        Validators.required,
        Validators.email,
        Validators.minLength(6)
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
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).pipe(
      map(data => this.router.navigate(['dashboard']))
    ).subscribe();
  }

}
