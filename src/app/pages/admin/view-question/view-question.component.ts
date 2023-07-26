import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent {
  constructor(private router:ActivatedRoute,private questions:QuestionsService){}
qid:any;
title:any;
_question:any=[];
  ngOnInit():void
{
 this.qid= this.router.snapshot.params['qid']
 this.title= this.router.snapshot.params['title']
 this.questions.getQuestionOfQuiz(this.qid).subscribe((data)=>{
  this._question= data;
  console.log(this._question)
 },
 (error)=>{
console.log(error);
 })
}

public removequestion(quesId:any){
  swal({
    icon:'warning',
    title:'are you sure?',
    dangerMode:true,
  }).then((result)=>{
    if(result){
      this.questions.delQuestion(quesId).subscribe(
        (data)=>{swal("Successfully deleted",'success')
        this._question=this._question.filter((q:any)=>{q.quesId!=quesId});
      },
      (error)=>{swal("error in deleting data ",'error') 
      })

    }
  })

  }

}

