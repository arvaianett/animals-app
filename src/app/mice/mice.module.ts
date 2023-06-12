import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiceRoutingModule } from './mice-routing.module';
import { MiceComponent } from './mice/mice.component';


@NgModule({
  declarations: [
    MiceComponent
  ],
  imports: [
    CommonModule,
    MiceRoutingModule
  ]
})
export class MiceModule { }
