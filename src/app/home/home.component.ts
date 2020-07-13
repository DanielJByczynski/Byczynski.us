import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [':host { width: 100%; height: 100%; }']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
