import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-viewapplication',
  templateUrl: './viewapplication.component.html',
  styleUrls: ['./viewapplication.component.css']
})
export class ViewapplicationComponent implements OnInit {
  applicationss:any=[];
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.getApplications();
  }
  getApplications(){
    this.auth.getApplication().subscribe((data:any) => this.applicationss=data)
  }

}
