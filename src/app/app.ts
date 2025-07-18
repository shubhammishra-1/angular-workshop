import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Courses } from './shared/courses';
import { ProductList } from './product-list';

import { ClientDetails } from './client-details/client-details';

// importing Material Module

import { MaterialModuleModule } from './material-module/material-module-module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MaterialModuleModule,ClientDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App implements OnInit {

  protected readonly title = signal('angular-workshop');
   
  color='red'
  usrURL="assets/user.png"
  
  currentLesson=null;

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

  constructor(private coursesService: Courses) {}


  productList:ProductList[]=[];

  ngOnInit(): void {

    this.productList = this.coursesService.details;
    console.log(this.productList);
      
  }
  

  selectLesson(lesson:any){

    this.currentLesson=lesson;

    console.log(lesson);


  }
}
