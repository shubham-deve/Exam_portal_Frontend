import { Component } from '@angular/core';
import { CategoryServicesService } from 'src/app/services/category-services.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent {
  categories:any;
  constructor(private cat:CategoryServicesService){}
  ngOnInit():void{
    this.cat.Categories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (error)=>{
        swal("error in loading data",'error')
      }
    )
  }


}
