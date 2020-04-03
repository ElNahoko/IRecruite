import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details-single',
  templateUrl: './job-details-single.component.html',
  styleUrls: ['./job-details-single.component.css']
})
export class JobDetailsSingleComponent implements OnInit {

  constructor() { }
  lat = 40.730610;
  lng = -73.935242;
  ngOnInit() {
  }

}
