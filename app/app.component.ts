import { Statement } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Router, RouterState, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent {

  // default constructor
  constructor(router: Router, private titleService: Title) {

    // set title to 'Home' until route is deciphered.  
    this.titleService.setTitle('Home');

    // Subscribe to router changes
    router.events.subscribe((val) => {
      // switch to handle the url and set appropriate title in tab
      switch (val.url) {
        case "/projects":
          this.titleService.setTitle("My Projects");
          break;
        case "/services":
          this.titleService.setTitle("Services");
          break;
        case "/aboutme":
          this.titleService.setTitle("About Me");
          break;
        case "/contact":
          this.titleService.setTitle("Contact Me");
          break;
        case "/home":
          this.titleService.setTitle("Home");
          break;
      }
    });
  }

}
