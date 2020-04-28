import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import  {AgmCoreModule} from '@agm/core'
import { JobDetailsSingleComponent } from './job-details-single/job-details-single.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { JobSubmitComponent } from './job-submit/job-submit.component';
import { SpontaneousSubmitComponent } from './spontaneous-submit/spontaneous-submit.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HomeComponent,
      FooterComponent,
      JobDetailsSingleComponent,
      ContactComponent,
      UploadComponent,
      JobSubmitComponent,
      SpontaneousSubmitComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MultiSelectAllModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA1TSYPT_9ZVcRjC0s72_hmeSVKZFMujGQ'
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
