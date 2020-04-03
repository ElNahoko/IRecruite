import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetailsSingleComponent } from './job-details-single/job-details-single.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'joblist', component: JobDetailsComponent},
  {path: 'jobsingle', component: JobDetailsSingleComponent},
  {path: 'contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
