import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NextFocusDirective } from './next-focus.directive';

import { NgOtpUIComponent } from './ng-otp-ui.component';
import { NumbersOnlyDirective } from './numbers-only.directive';



@NgModule({
  declarations: [
    NgOtpUIComponent,
    NumbersOnlyDirective,
    NextFocusDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgOtpUIComponent
  ]
})
export class NgOtpUIModule { }
