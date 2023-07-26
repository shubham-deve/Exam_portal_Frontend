import { Component } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {
  constructor(public quiz:QuizServiceService){}
  quizzes:any;
  ngOnInit():void{
    this.quiz.getQuizes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(data);
      },
      (error)=>{swal('Error','','error')}
    )
  }
  public deleteQuiz(qid:any){
    swal({
      icon:'warning',
      title:'sure to delete ?',
      dangerMode:true,
    }).then(
      (result)=>{
        if(result){
          this.quiz.removeQuiz(qid).subscribe(
            (data)=>{
              this.quizzes = this.quizzes.filter((q:any)=>{q.qid!=qid});
              swal("Deleted Succesfully",'','success')
            },
            (error)=>{
              swal("error in deleting quiz",'','error')
            }
          )
        }
      }
    )

  }

}
