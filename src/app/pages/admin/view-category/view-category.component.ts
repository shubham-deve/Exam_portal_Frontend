import { Component } from '@angular/core';
import { CategoryServicesService } from 'src/app/services/category-services.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {
  
  cat: any;
  constructor(public category:CategoryServicesService){}
  ngOnInit():void{
   this.category.Categories().subscribe(
      (data)=>{
         this.cat=data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

public delete_Category(catID:any){
  swal({
    icon:'warning',
    title:'are sure to delete category?',
    dangerMode:true,
}).then((result)=>{
  if(result){
    this.category.remove_category(catID).subscribe(
      (data)=>{
       this.cat = this.cat.filter((c: { cid: any; })=>c.cid!=catID);
        swal("Deleted Successfully",'','success')
      },
      (error)=>{
      console.log(error);
      }
          )
}})
  

  }
}
