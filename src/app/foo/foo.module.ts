import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooListComponent } from './foo/foo-list/foo-list.component';



@NgModule({
  declarations: [
    FooListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooModule { }
