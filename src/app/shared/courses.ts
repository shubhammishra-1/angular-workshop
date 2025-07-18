import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//A service is a class that contains business logic, data access, or shared utility functions.
//It is used to share data and logic across multiple components.



export class Courses {

  details=[
    {
      title: 'Product 1',
      price: 9234,
      description: 'Product 1 is the best',
    },
    {
      title: 'Product 2',
      price: 3043,
      description: 'Product 2 is special',
    },
    {
      title: 'Product 3',
      price: 4355,
      description: 'Product 3 has my heart',
    },
  ];

  constructor(){}
  
}
