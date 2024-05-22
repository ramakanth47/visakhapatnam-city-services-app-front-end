import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  studentForm: FormGroup;
f: any;

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.studentForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        degreeProgram: ['', Validators.required],
        presentAddress: ['', Validators.required],
        age: ['', Validators.required]
      }),
      academicInfo: this.fb.group({
        grade: ['', Validators.required],
        gpa: ['', Validators.required]
      }),
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
      })
    });
  }

  get firstNameFieldInvalid() {
    return this.studentForm.get('personalInfo.firstName').invalid && this.studentForm.get('personalInfo.firstName').touched;
  }

  get lastNameFieldInvalid() {
    return this.studentForm.get('personalInfo.lastName').invalid && this.studentForm.get('personalInfo.lastName').touched;
  }

  get degreeProgramFieldInvalid() {
    return this.studentForm.get('personalInfo.degreeProgram').invalid && this.studentForm.get('personalInfo.degreeProgram').touched;
  }
  get presentAddressFieldInvalid() {
    return this.studentForm.get('personalInfo.presentAddress').invalid && this.studentForm.get('personalInfo.presentAddress').touched;
  }

  get ageFieldInvalid() {
    return this.studentForm.get('personalInfo.age').invalid && this.studentForm.get('personalInfo.age').touched;
  }

  get gradeFieldInvalid() {
    return this.studentForm.get('academicInfo.grade').invalid && this.studentForm.get('academicInfo.grade').touched;
  }

  get gpaFieldInvalid() {
    return this.studentForm.get('academicInfo.gpa').invalid && this.studentForm.get('academicInfo.gpa').touched;
  }

  get emailFieldInvalid() {
    return this.studentForm.get('contactInfo.email').invalid && this.studentForm.get('contactInfo.email').touched;
  }

  get phoneNumberFieldInvalid() {
    return this.studentForm.get('contactInfo.phoneNumber').invalid && this.studentForm.get('contactInfo.phoneNumber').touched;
  }

  onSubmit() {
    if (this.studentForm.valid) {
      // Form is valid, submit the data
      console.log(this.studentForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display validation messages
      this.studentForm.markAllAsTouched();
    }
  }

}
