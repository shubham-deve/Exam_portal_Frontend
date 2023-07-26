import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public login:LoginService,private router:Router){}
   isLoggedIn=false;
   user=null;

   ngOnInit():void{
    this.isLoggedIn=this.login.isLoginIn();
    this.user=this.login.getUser().userName ;
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoginIn();
      this.user=this.login.getUser().username;
    })
   }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
