import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent {
  catId:any;
  quizzes:any;
  constructor(private router:ActivatedRoute,private quiz:QuizServiceService){}
  ngOnInit():void{
this.router.params.subscribe((params)=>{
  this.catId=params['catId'];
  if(this.catId==0){
    console.log("load all the quiz")
    this.quiz.getQuizes().subscribe((data)=>{this.quizzes=data
       console.log(this.quizzes)},(error)=>{alert("error in loading")})
  }
  else{
    console.log("Load specific ")
    this.quiz.getQuizOfCcategories(this.catId).subscribe(
      (data)=>{
        this.quizzes=data;
      },
      (error)=>{
        swal("Error in loading data",'error')
      }
    )
  }

})


  }


}
