import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})
export class StartquizComponent {
  qid:any;
  questions:any=[]
  constructor(private locationSt:LocationStrategy,private route:ActivatedRoute,public quest:QuestionsService){}

  marksGot=0;
  correctAnswers=0;
  AttemptQuestions=0;

  isSubmited=false;
  timer:any;

  
  ngOnInit():void{
    this.preventBackButton();
  this.qid= this.route.snapshot.params['qid']
  this.loadQuestions();

  }
  loadQuestions(){
    this.quest.getQuestionOfQuiz(this.qid).subscribe(
      (data)=>{
        this.questions=data;
        this.timer=this.questions.length*1*60
        this.questions.forEach((q:any)=> {
          q['givenAnswer']='';
        });
        console.log(this.questions)
      },
      (error)=>{
        swal("Error in loading questions",'error')
      }
    )
    this.startTimer();
  }
  preventBackButton(){
history.pushState(null,location.href);
this.locationSt.onPopState(()=>{
  history.pushState(null,location.href);
})
  }
  submitQuiz(){
    swal({
      icon:'info',
      text:"Are you sure to compelete the quiz ",
    }
    ).then((req)=>{
      if(req){
        this.evalQuiz();
  }})


      
  }
  startTimer(){
   let t= window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }else{
       this.timer--;
      }
    },1000)
  }
  formatTimer(){
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60;
    return `${mm} min: ${ss} sec`;
  }

  evalQuiz(){
    this.isSubmited=true;
    this.questions.forEach((q:any)=>{
      if(q.givenAnswer==q.answer){
        this.correctAnswers++;
       let marksSingle= this.questions[0].quiz.maxMarks/this.questions.length;
        this.marksGot+=marksSingle
      }
      if(q.givenAnswer.trim()!=''){
        this.AttemptQuestions++
      }
      console.log(this.correctAnswers)
      console.log(this.marksGot)
      console.log(this.AttemptQuestions)


  })
}
printResult(){
  window.print();
}
}
