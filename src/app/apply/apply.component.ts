import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  applyForm: any;
  constructor(private auth: AuthService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.applyForm = this.formBuilder.group({
      firstname: [null,[Validators.required]],
      lastname: [null,[Validators.required]],
      studentno:[null,[Validators.required,Validators.maxLength(9)]],
      specialization:[null,[Validators.required]],
      cellNo:[null,[Validators.required,Validators.maxLength(10)]],
      email:[null,[Validators.required,Validators.email,Validators.minLength(6)]],
      
    })
  }
  onSubmit(){
    if(this.applyForm.invalid){
      return;

    }
    console.log(this.applyForm.value);
  }

}
