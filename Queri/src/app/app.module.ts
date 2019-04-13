

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

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



@NgModule({
  declarations: [
    AppComponent,
    AskComponent,
    HomeComponent,
    QuestionComponent,
    CommentComponent,
    AskFormComponent,
    CommentFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'Ask',
        component: AskComponent,
      }
    ])
  ],
  providers: [DemoService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
