import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOtpUIComponent } from './ng-otp-ui.component';

describe('NgOtpUIComponent', () => {
  let component: NgOtpUIComponent;
  let fixture: ComponentFixture<NgOtpUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOtpUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOtpUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
