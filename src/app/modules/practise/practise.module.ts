import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PractiseRoutingModule } from './practise-routing.module';
import { StudentsComponent } from './students/students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollegeComponent } from './college/college.component';
import { ValidateComponent } from './validate/validate.component';

import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { TableComponent } from './table/table.component';
import { PopupsComponent } from './popups/popups.component';
import { PopupComponent } from './popup/popup.component';














@NgModule({
  declarations: [
    StudentsComponent,
    HomeComponent,
    AboutComponent,
    CollegeComponent,
    ValidateComponent,
  
    NestedFormComponent,
    FormarrayComponent,
    TableComponent,
    PopupsComponent,
    PopupComponent,
   
   

  
   
   
  
 
 
   
    
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    PractiseRoutingModule,
    HttpClientModule
  ]
})
export class PractiseModule { }
