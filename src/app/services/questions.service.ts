import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http:HttpClient) { }
  public getQuestionOfQuiz(qId:any){
return this.http.get(`${baseurl}/question/quiz/${qId}`)
  }

  public addQuestion(ques:any){
    return this.http.post(`${baseurl}/question/`,ques)
  }

  public delQuestion(quesId:any){
    return this.http.delete(`${baseurl}/question/${quesId}`)
  }
}
