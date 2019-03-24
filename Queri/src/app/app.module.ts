

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicComponent,
    AskComponent,
    HomeComponent,
    QuestionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    //NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path:'Ask', 
        component: AskComponent,
      }
    ])
  ],
  providers: [DemoService, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
