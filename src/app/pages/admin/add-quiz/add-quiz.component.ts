import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServicesService } from 'src/app/services/category-services.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  constructor(public category:CategoryServicesService,public snack:MatSnackBar,public quizservice:QuizServiceService){}

  ngOnInit():void{
    this.category.Categories().subscribe(
      (data:any)=>{
        this.categories=data;

      },
      (error)=>{
        swal('failed to load data','of catrgory','error')

      }
    )
  }
  categories=[{
    cid:'',
    title:''  

  }];

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    noOfQuestions:'',
    active:true,
    category:{
      cid:''
    }
  }
  addQuiz(){
    if(this.quizData.title.trim()==''|| this.quizData.title==null){
      this.snack.open("title required",'',{duration:3000})
      return;
    }
    this.quizservice.addQuiz(this.quizData).subscribe(
      (data)=>{
        swal('Succesfull','quiz is added','success');
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          noOfQuestions:'',
          active:true,
          category:{
            cid:''
          }
        }
      },
      (error)=>{
        swal("Error in deleting the ",'quiz','error')
      }
    )

    


    }

}
