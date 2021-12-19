import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'Ss-ng-otp-UI',
  templateUrl:'ng-otp-ui.component.html',
  styleUrls:['ng-otp-ui.component.scss']
})
export class NgOtpUIComponent implements OnInit {
  @Input()
  length?: any

  @Output() otpSent: EventEmitter<any> = new EventEmitter;
  
  otpLength:any
  otpForm!:FormGroup
  arr: any = []
  constructor() { }

  ngOnInit(): void {
    this.otpLength = (this.length > 3) ? this.length : 4;
    this.otpForm = new FormGroup({})
    for (let i = 0; i < this.otpLength; i++) {
      this.arr.push(this.getFormConntrol(i));
      this.otpForm.addControl(this.getFormConntrol(i), new FormControl('', Validators.required))
    }
  }

  getFormConntrol(index: number) {
    return `crtl${index}`;
  }

  otpEnteredKey(eve:any){
    const otpEntered:any = Object.values(this.otpForm.value)
    let newOtp = []
    for(let i = 0 ; i < otpEntered.length ; i++ ) {
      if(otpEntered[i] !== ''){
        newOtp.push(JSON.parse(otpEntered[i]))
      }
    }
    this.otpSent.emit(newOtp)
  }

}
