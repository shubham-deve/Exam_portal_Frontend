import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  constructor(private router:ActivatedRoute,private quest:QuestionsService,private quiz:QuizServiceService){}
qId:any;
  qtitle:any;
  question={
    quiz:{
      qid:0
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''

  }
  
ngOnInit():void{
  this.qId= this.router.snapshot.params['qid']
this.qtitle=this.router.snapshot.params['title']
this.question.quiz['qid']=this.qId
}

formSubmit(): void{
  this.quest.addQuestion(this.question).subscribe(
    (data)=>{
      swal("Question added successfully",'','success')

    },
    (error)=>{
      swal("Error in adding question","try after some time ","error")
    }
  )
}
}
