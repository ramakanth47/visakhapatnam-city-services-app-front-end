import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollegeComponent } from './college/college.component';
import { ValidateComponent } from './validate/validate.component';
import { PopupComponent } from './popup/popup.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { TableComponent } from './table/table.component';
import { PopupsComponent } from './popups/popups.component';

const routes: Routes = [
  {
    path:'student-reactive-form',
    component:StudentsComponent
  },
  {
    path:'home-reactive-form',
    component:HomeComponent
  },
  {
    path:'about-reactive-form',
    component:AboutComponent
  },
  {
    path:'college-reactive-form',
    component:CollegeComponent
  },
  {
    path:'college-reactive-form',
    component:CollegeComponent
  },
  {
    path:'validate-reactive-form',
    component:ValidateComponent
  },
  {
    path:'popup-reactive-form',
    component:PopupComponent
  },
  {
    path:'nested-reactive-form',
    component:NestedFormComponent
  },
  {
    path:'formarray-reactive-form',
    component:FormarrayComponent
  },
  {
    path:'table-reactive-form',
    component:TableComponent
  },
  {
    path:'popup-reactive-form',
    component:PopupComponent
  },
  {
    path:'popups-reactive-form',
    component:PopupsComponent
  },
 
 
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractiseRoutingModule { }
