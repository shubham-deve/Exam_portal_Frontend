import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
  qId=0
  constructor(private router:ActivatedRoute,private q:QuizServiceService){}
  quz:any;
  categories:any;

  ngOnInit():void{
    this.qId=this.router.snapshot.params['qid'];
    this.q.quizID(this.qId).subscribe(
      (data)=>{
        this.quz=data
        console.log(data)
      },
      (error)=>{
      
      }
    )    

  }
  updateQuiz(){
this.q.updateQuiz(this.quz).subscribe(
  (data)=>{
    swal("Updated Successfully",'','success')
  },
  (error)=>{
    swal("Error in updating the data ","","error")
  }
)
  }
}
