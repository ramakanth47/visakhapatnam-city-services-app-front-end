import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hotelForm: FormGroup;
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.hotelForm = this.fb.group({
      personalInfo: this.fb.group({
        guestName: ['', Validators.required],
        contactInformation: ['', Validators.required],
        roomType: ['', Validators.required],
        age: ['', Validators.required]
      }),
     
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
      })
    });
  }

  get guestNameFieldInvalid() {
    return this.hotelForm.get('personalInfo.guestName"').invalid && this.hotelForm.get('personalInfo.guestName"').touched;
  }

  get contactInformationFieldInvalid() {
    return this.hotelForm.get('personalInfo.contactInformation').invalid && this.hotelForm.get('personalInfo.contactInformation').touched;
  }

  get roomTypeFieldInvalid() {
    return this.hotelForm.get('personalInfo.roomType').invalid && this.hotelForm.get('personalInfo.roomType').touched;
  }

  get ageFieldInvalid() {
    return this.hotelForm.get('personalInfo.age').invalid && this.hotelForm.get('personalInfo.age').touched;
  }

  

  get emailFieldInvalid() {
    return this.hotelForm.get('contactInfo.email').invalid && this.hotelForm.get('contactInfo.email').touched;
  }

  get phoneNumberFieldInvalid() {
    return this.hotelForm.get('contactInfo.phoneNumber').invalid && this.hotelForm.get('contactInfo.phoneNumber').touched;
  }

  onSubmit() {
    if (this.hotelForm.valid) {
      // Form is valid, submit the data
      console.log(this.hotelForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display validation messages
      this.hotelForm.markAllAsTouched();
    }
  }
}
