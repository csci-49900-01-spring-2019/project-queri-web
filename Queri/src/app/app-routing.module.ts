import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';
// Import all the components for which navigation service has to be activated 
import { SignInComponent } from '../app/components/sign-in/sign-in.component'
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { AuthGuard } from "../app/guard/auth.guard"
import { VerifyEmailComponent } from '../app/components/verify-email/verify-email.component';
import { SecureInnerPagesGuard } from "../app/guard/secure-inner-pages.guard.ts.guard";
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AskComponent } from 'src/app/ask/ask.component';
import { VotingComponent } from 'src/app/voting/voting.component';
import { ArchiveComponent } from 'src/app/archive/archive.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';


const routes: Routes = [];

// const routes: Routes = [
// { path: '', redirectTo: '/featured/', pathMatch: 'full' },
// // { path: 'login', component: LoginComponent },
// { path: 'featured', redirectTo: '404' },
// { path: 'featured/:id', component: HomeComponent },
// { path: 'ask', component: AskComponent },
// { path: 'vote', component: VotingComponent },
// { path: 'archived', component: ArchiveComponent },
// // { path: '404' , component: PageNotFoundComponent },
// { path: '**', redirectTo: '404' },
// { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
// { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
// { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
// { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
// { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
// ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

