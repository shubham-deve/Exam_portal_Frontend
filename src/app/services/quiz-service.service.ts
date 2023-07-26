import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(public http:HttpClient) { }

  public getQuizes(){
    return this.http.get(`${baseurl}/quiz/`)
  }

  public addQuiz(quiz:any){
    return this.http.post(`${baseurl}/quiz/`,quiz)
  }

  public removeQuiz(qid:any){
    return this.http.delete(`${baseurl}/quiz/${qid}`)
  }
  public quizID(qId:any){
   return this.http.get(`${baseurl}/quiz/${qId}`)
  }

  public updateQuiz(q:any){
    return this.http.put(`${baseurl}/quiz/`,q);
  }

  public getQuizOfCcategories(cid:any){
    return this.http.get(`${baseurl}/quiz/category/${cid}`)
  }
}
