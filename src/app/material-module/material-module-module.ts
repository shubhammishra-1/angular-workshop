import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Courses } from '../shared/courses';

//Importing ALL material UI modules

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

//A module is a class annotated with @NgModule() that is used to "group related components", directives, pipes, and services together

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatSliderModule,
    MatExpansionModule,
    MatCardModule
  ],
})
export class MaterialModuleModule { }
