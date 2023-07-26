import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServicesService } from 'src/app/services/category-services.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category={
    title:'',
    description:''
  }
  constructor(private cat:CategoryServicesService,private snack:MatSnackBar){}
  ngOnInit():void
  {

  }
  formSubmit(){
    if(this.category.title.trim()=='' ||this.category.title==null ){
      this.snack.open("Title Required",'',{duration:3000})
      return;
    }
    this.cat.add_Category(this.category).subscribe((data:any)=>{
      swal("Success","Category added succesfully","Success")
    },
    (error)=>{
      swal('server error','!!','error');
    })

  
  }

}
