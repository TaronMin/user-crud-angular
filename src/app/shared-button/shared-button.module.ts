import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedButtonRoutingModule } from './shared-button-routing.module';
import { ButtonComponentComponent } from './button-component/button-component.component';


@NgModule({
  declarations: [
    ButtonComponentComponent
  ],
  exports: [
    ButtonComponentComponent
  ],
  imports: [
    CommonModule,
    SharedButtonRoutingModule
  ]
})
export class SharedButtonModule { }
