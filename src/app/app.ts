import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// importing Material Module

import { MaterialModuleModule } from './material-module/material-module-module';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MaterialModuleModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App implements OnInit {
  protected readonly title = signal('angular-workshop');
   
  color='red'
  usrURL="assets/user.png"

  courseLessons = [
  { title: 'Hello Angular' },
  { title: 'Component Fundamentals' },
  { title: 'Template Driven Forms' },
  { title: 'Angular Services' },
  { title: 'Server Communication' },
  { title: 'Component Driven Architecture' },
  { title: 'Angular Routing' },
  { title: 'Unit Testing Fundamentals' },
];

  constructor(){}


  ngOnInit(): void {
      
  }
  

  selectLesson(lesson:{}){

    console.log(lesson);


  }
}
