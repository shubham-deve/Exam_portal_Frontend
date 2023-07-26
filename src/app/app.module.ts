import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './pages/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule ,Routes  } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './mycomponent/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UsersidebarComponent } from './pages/user/usersidebar/usersidebar.component';
import { LoadquizComponent } from './pages/user/loadquiz/loadquiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartquizComponent } from './pages/user/startquiz/startquiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

const routes:Routes=[
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'categories',
        component: ViewCategoryComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'quizzes',
        component:ViewQuizComponent
      },
      {
        path:'addQuiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent
      },{
        path:'question/:qid/:title',
        component:ViewQuestionComponent
      },
      {
        path:'addQuestion/:qid/:title',
       component:AddQuestionComponent
      }
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:':catId',
        component:LoadquizComponent
      },
      {
        path:'instruction/:qid',
        component:InstructionsComponent
      },
     
    ]
   
  },
  {
    path:'startQuiz/:qid',
    component:StartquizComponent,
    canActivate:[NormalGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    ViewQuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    UsersidebarComponent,
    LoadquizComponent,
    InstructionsComponent,
    StartquizComponent,
    UpdateProfileComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
