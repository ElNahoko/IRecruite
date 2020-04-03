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
@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HomeComponent,
      FooterComponent,
      JobDetailsSingleComponent,
      ContactComponent,
      UploadComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
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
