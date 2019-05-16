

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from "../app/auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "../app/guard/auth.guard";
import { SecureInnerPagesGuard } from "../app/guard/secure-inner-pages.guard.ts.guard";

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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';

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
    PageNotFoundComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    UserInfoComponent
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
    AngularFirestoreModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'featured', redirectTo: '404' },
      { path: 'featured/:id', component: HomeComponent },
      { path: 'ask', component: AskComponent },
      { path: 'vote', component: VotingComponent },
      { path: 'archived', component: ArchiveComponent },
      // { path: '**', redirectTo: '404' },
      { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
      // { path: '404' , component: PageNotFoundComponent }
      ])


    //   { path: 'user', redirectTo: '404' },
    //   { path: 'user/:id', component: ProfileComponent,
    //     children: [  ],
    //   },
    //   { path: '404' , component: PageNotFoundComponent },
    //   { path: '**', redirectTo: '404' }
    // ])

  ],
  providers: [DemoService, HttpClientModule, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
