import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-otp-UI-app';

  otp:any
  
  recievedOTP(eve:any){
    console.log("app",eve)
    this.otp = eve
  }
  recievedOTP1(eve:any){
    console.log(eve)
  }

  submitOtp(){
    console.log(this.otp)
  }
}
