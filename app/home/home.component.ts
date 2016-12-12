import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: [require('./home.component.css')]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body: string = 'This is the about home body';
  message: string;


  ngOnInit() {
  }

}
