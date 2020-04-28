import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details-single',
  templateUrl: './job-details-single.component.html',
  styleUrls: ['./job-details-single.component.css']
})
export class JobDetailsSingleComponent implements OnInit {

  constructor(private router: Router) { }
  lat = 40.730610;
  lng = -73.935242;
  ngOnInit() {
  }
  public gotoProductDetails(url) {
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
}
}
