import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  posts: any =[]
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.adminGetPost();
    
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
