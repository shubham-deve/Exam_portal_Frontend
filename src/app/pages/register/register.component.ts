import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService:UserService,private snack:MatSnackBar){}
  public user={
    userName:'',
    fullName:'',
    phone:'',
    password:'',
    email:''
  };
  formSubmit(){
    console.log(this.user)
    if(this.user.userName.trim() ==" " || this.user.userName==null){
      //alert("username is required")
      this.snack.open("Username is required ","",{duration:3000})
      return;
    }
    if(this.user.userName.length>=5){
    
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        swal("successfully registered",data.userName,'success')
      },
      (error)=>{
        console.log(error)
        this.snack.open("something went wrong",'',{duration:2000})

      }
    )
  }
  else{
    this.snack.open("Username should be greater than 5 ",'',{duration:1000})
  }
}

}
