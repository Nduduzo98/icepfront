import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  
 
  editreply = new FormGroup({
   status: new FormControl('')
 })
  constructor(private auth:AuthService,private routing:ActivatedRoute, private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    console.log(this.routing.snapshot.params.id)
    this.auth.getCurrentData(this.routing.snapshot.params.id).subscribe((data:any)=>{
      this.editreply = new FormGroup({
        status: new FormControl(data['status']) 
      })
    })
    
     
    
      // this.editreply = new FormGroup({
      //   applicationStatus: new FormControl(res['applicationStatus'])
      //   })
    
  }
  updateStatus(){
    this.auth.updateStatus(this.routing.snapshot.params.id,this.editreply.value).subscribe((data:any) =>{
      console.log(data,"updated")
    })
  }
    
  
}
