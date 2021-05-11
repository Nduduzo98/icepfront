import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
//exports
export interface LoginForm{
  email:string;
  password: string
}

export interface signupForm{
  firstName?:string;
  lastName?:string;
  email?:string;
  password?: string
}
export interface postForm{
  vacancyName?:string;
  vacancyDesc?:string;
  closingDate?:Date;
}
export interface applyForm{
  firstName?:string;
  lastName?:string;
  email?:string;
  studentno?:any;
  specialization?:string;
  mobileno?:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:5000/stu_register";
  //admin urls
  posturl = "http://localhost:5000/post"
  getPost = "http://localhost:5000/posted"
  deletePosturl = "http://localhost:5000"
  getapplicationUrl = "http://localhost:5000/Applicationss"
  constructor(private http:HttpClient) { }
  getCurrentData(id:number){
    return this.http.get<any>(this.deletePosturl+'/'+id)
  }
  //applicant functions
  apply(data:any){
    return this.http.post<any>(this.url,data).pipe(
      map(data => data)
    )
  }
  login(data:any){
    return this.http.post<any>(this.url,data).pipe(
      map(data=>data)
    )
  }  
  signUp(data:any){
    return this.http.post<any>(this.url,data).pipe(
      map(data=>data)
    )
  }
  //admin functions
  postVacancy(data:any){
    return this.http.post<any>(this.posturl,data).pipe(
      map(data=>data)
    )
  }
  
  adminGetPost(){
    return this.http.get<any>(this.getPost)
  }
  deletePost(id:number){
    return this.http.delete<any>(this.deletePosturl+'/'+id)
  }
  getApplication(){
    return this.http.get<any>(this.getapplicationUrl)
  }
  deleteApp(id:number){
    return this.http.delete<any>(this.deletePosturl+'/'+id)
  }
  updateStatus(id:number,data:any){
    return this.http.put(this.deletePosturl+'/'+id,data)

  }
  getProfiles(){
    return this.http.get<any>(this.getapplicationUrl)
  }
  deleteProf(id:number){
    return this.http.delete<any>(this.deletePosturl+'/'+id)
  }
  
  
  

}