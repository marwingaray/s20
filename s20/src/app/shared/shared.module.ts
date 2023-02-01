import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ], 
  exports:[
    NavComponent
  ]
})
export class SharedModule { }
