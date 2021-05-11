import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  profiles:any = [];
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.getProfiles()
  }
  getProfiles(){
    this.auth.getProfiles().subscribe((data:any) => this.profiles=data)
  }
  deleteApp(id:any){
    this.auth.deleteProf(id).subscribe(data =>{

    })
    location.reload();
  }
}
