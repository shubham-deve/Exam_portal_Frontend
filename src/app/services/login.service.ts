import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject=new Subject<boolean>

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    return this.http.get(`${baseurl}/current-user`);
  }


public generateToken(loginData:any){
  return this.http.post(`${baseurl}/generate-token`,loginData)
}
// login user:set token in localstorage

public loginUser(token:any){
localStorage.setItem("token",token);
this.loginStatusSubject.next(true)
return true;
}

// check whether login is there or not

public isLoginIn(){
  let token=localStorage.getItem("token")
  if(token==undefined || token==' '|| token==null){
    return false;
  }
  else{
    return true;
  }
}
// logout

public logout(){
  localStorage.removeItem("token")
  return true;
}

// get token

public getToken(){
  return localStorage.getItem("token")
}

//set userDetail

public setuser(user:any){
localStorage.setItem('user',JSON.stringify(user));
}

//getuser

public getUser(){
  let userstr=localStorage.getItem('user');
  if(userstr!=null){
    return JSON.parse(userstr)
  }
  else{
    this.logout();
    return null;
  }
}
// get user role
public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}
}
