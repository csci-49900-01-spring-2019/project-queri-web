

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionComponent } from './home/question/question.component';
import { CommentComponent } from './home/comment/comment.component';
import { AskFormComponent } from './ask/ask-form/ask-form.component';
import { CommentFormComponent } from './home/comment-form/comment-form.component';
import { environment } from '../environments/environment';
import { VotingComponent } from './voting/voting.component';
import { VoteQuestionComponent } from './voting/vote-question/vote-question.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveQuestionComponent } from './archive/archive-question/archive-question.component';
import { LoginComponent } from './login/login.component';
import { ObjectToArrayPipe } from './_pipes/object-to-array.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    AskComponent,
    HomeComponent,
    QuestionComponent,
    CommentComponent,
    AskFormComponent,
    CommentFormComponent,
    VotingComponent,
    VoteQuestionComponent,
    ArchiveComponent,
    ArchiveQuestionComponent,
    ObjectToArrayPipe,
    LoginComponent,
    PageNotFoundComponent
  ],
   //  fetch("url.com",{header:{"token":localStorage.getItem("idtoken")}})
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    /*
    export const rootRouterConfig: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
      { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
    ];
    */
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'featured/:id', component: HomeComponent },
      { path: 'featured', redirectTo: '/404' },
      { path: 'ask', component: AskComponent },
      { path: 'vote', component: VotingComponent },
      { path: 'archived', component: ArchiveComponent },
      { path: '404' , component: PageNotFoundComponent},
      { path: '**', redirectTo: '/404' }
    ])
  ],
  providers: [DemoService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }



