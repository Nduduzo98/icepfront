import { Component, OnInit,Inject} from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm:any;
  constructor(private auth: AuthService, private router:Router, private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      vacancyName: [null,[Validators.required]],
      vacancyDesc : [null,[Validators.required]],
      closingDate : [null,[Validators.required]]
      
    })
  }
  onSubmit(){
    if(this.postForm.invalid){
      return;

    }
  
    console.log(this.postForm.value);
    this.auth.postVacancy(this.postForm.value).pipe(
      map(data => this.router.navigate(['admin']))
    ).subscribe();
    this.dialogRef.close()
  }
  

}
