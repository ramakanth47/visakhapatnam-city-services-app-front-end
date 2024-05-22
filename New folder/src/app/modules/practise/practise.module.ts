import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PractiseRoutingModule } from './practise-routing.module';
import { StudentsComponent } from './students/students.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    StudentsComponent,
    
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    PractiseRoutingModule
  ]
})
export class PractiseModule { }
