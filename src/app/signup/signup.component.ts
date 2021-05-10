import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: any;
  constructor(private auth: AuthService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: [null,[Validators.required]],
      lastName: [null,[Validators.required]],
      email:[null,[Validators.required,Validators.email,Validators.minLength(6)]],
      password:[null,[Validators.required,Validators.minLength(3)]]
    })
  }
  onSubmit(){
    if(this.signupForm.invalid){
      return;

    }
    console.log(this.signupForm.value);
    this.auth.signUp(this.signupForm.value).pipe(
      map(data => this.router.navigate(['login']))
    ).subscribe();
  }

}
