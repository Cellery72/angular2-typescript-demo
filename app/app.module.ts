import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' }
    ])
  ],                             // route definitions/modules
  declarations: [
    AppComponent,
    HomeComponent,
  ],                             // components and directives
  bootstrap: [AppComponent],     // root component
  providers: [
    Title
  ]                              // services
})
export class AppModule { }