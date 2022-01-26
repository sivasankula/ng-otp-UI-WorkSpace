# Angular Otp UI template

![alt text](https://github.com/sivasankula19/ng-otp-UI-WorkSpace/blob/d6813bfd48216b4030ecbaf4eb82f98dd03579e0/otp_animated_s.gif?raw=true)

![Npm Version](https://img.shields.io/badge/npm-v0.0.1-red.svg)

## Installation
```
npm install ng-otp-ui
```

### How to use

import the otp-ui module in the module file of the your component as below
```
    import { NgOtpUIModule } from 'ng-otp-ui';

    @NgModule({
    declarations: [],
    imports: [
        NgOtpUIModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
```

### Usage
use the selector `SS-ng-otp-UI`
#### Input
use the lenght property `length="n"` to define the lenght of the otp number 
<br> here `n` is the natural number which accepts number greater than or eqauls to 4
#### Otput
use the output property to access the form control values of the opt as `onInputChange` function


```
 <SS-ng-otp-UI length="6" (onInputChange)="recievedOTP($event)"></SS-ng-otp-UI>
```

Its accept the input property of lenght and output property of onInputChange method 
<br>
Generally if you not provide the length it takes the default length as `4`
<br>
Use the `$event` for receiving the output which is entered to the otp input elements
<br>
`onInputChange` function takes the param $event and gives the output as array
<br>
Example
<br>
entered otp inputs to otp elemsts as 190684 its gives output as `[1, 9, 0, 6, 8, 4]`
<br>
its only emits the output when the total number of inputs are entered