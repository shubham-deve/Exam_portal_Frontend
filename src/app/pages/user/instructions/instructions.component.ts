import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  qid:any;
  quizzes:any;
  constructor(private route:ActivatedRoute,private quiz:QuizServiceService,private router:Router){}
ngOnInit():void{
 this.qid= this.route.snapshot.params['qid']
 this.quiz.quizID(this.qid).subscribe(
  (data)=>{
    console.log(data);
    this.quizzes=data;
  },
  (error)=>{
    console.log("error");
    
  }
 )

}
startQuiz(){
  swal({
    icon:'success',
    text:"start the quiz",
  }
  ).then(
    (req)=>{
      if(req){
        this.router.navigate(['/startQuiz/'+this.qid])

      }
    }
  )

}
}
