

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AngularFireModule } from "@angular/fire"
import { AngularFireAuthModule } from "@angular/fire/auth"
import { HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service';
import { TopicListComponent } from './shared/topic-list/topic-list.component';
import { TopicComponent } from './shared/topic-list/topic/topic.component';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionComponent } from './home/question/question.component';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { CommentComponent } from './home/comment/comment.component';
import { environment } from '../environments/environment';
import { NewComponentComponent } from './new-component/new-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicComponent,
    AskComponent,
    HomeComponent,
    QuestionComponent,
    ObjectToArrayPipe,
    CommentComponent,
    NewComponentComponent

  ],





  ///
//
//  fetch("url.com",{header:{"token":localStorage.getItem("idtoken")}})
//
//
  //
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path:'Ask',
        component: AskComponent
      }

    ])
  ],
  providers: [DemoService, HttpClientModule],
  bootstrap: [AppComponent],

})
export class AppModule { }


/*
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];*/
