import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importing ALL material UI modules

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';



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
  ]
})
export class MaterialModuleModule { }
