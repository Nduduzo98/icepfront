import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewprofileComponent } from '../viewprofile/viewprofile.component';
import { ViewapplicationComponent } from '../viewapplication/viewapplication.component';
import { PostComponent } from '../post/post.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  posts: any =[]
  constructor(private auth:AuthService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.adminGetPost();
    
  }
  viewProfile():void {
    let dialogRef = this.dialog.open(ViewprofileComponent,{

    })
  }
  postVacancy():void {
    let dialogRef = this.dialog.open(PostComponent,{
      
    })
  }
  viewApplication():void {
    let dialogRef = this.dialog.open(ViewapplicationComponent,{

    })

    
  }

  adminGetPost(){
    this.auth.adminGetPost().subscribe((data:any)=>this.posts=data);
  }
  deletePost(id:any){
    this.auth.deletePost(id).subscribe(data =>{

    })
    location.reload();
  }

}
