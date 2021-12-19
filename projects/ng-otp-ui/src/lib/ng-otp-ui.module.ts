import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpUIComponent } from './ng-otp-ui.component';



@NgModule({
  declarations: [
    NgOtpUIComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgOtpUIComponent
  ]
})
export class NgOtpUIModule { }
