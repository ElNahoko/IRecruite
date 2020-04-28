import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetailsSingleComponent } from './job-details-single/job-details-single.component';
import { ContactComponent } from './contact/contact.component';
import { JobSubmitComponent } from './job-submit/job-submit.component';
import { SpontaneousSubmitComponent } from './spontaneous-submit/spontaneous-submit.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'joblist', component: JobDetailsComponent},
  {path: 'jobsingle', component: JobDetailsSingleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'candidat', component: JobSubmitComponent},
  {path: 'candidatspont', component: SpontaneousSubmitComponent},
  {path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
