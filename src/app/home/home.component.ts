import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  lat: number=47.301269475313276
  long: number=0.7374990312499952

  ngOnInit() {
  }

}
