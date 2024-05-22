import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent {
  collegeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.collegeForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required]
      }),
      academicInfo: this.fb.group({
        grade: ['', Validators.required],
        gpa: ['', Validators.required]
      }),
      admissionInfo: this.fb.group({
        applicationType: ['', Validators.required],
        admissionapplicationFor: ['', Validators.required],
        courseappliedFor: ['', Validators.required],
      }),
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
      })
    });
  }

  get firstNameFieldInvalid() {
    return this.collegeForm.get('personalInfo.firstName').invalid && this.collegeForm.get('personalInfo.firstName').touched;
  }

  get lastNameFieldInvalid() {
    return this.collegeForm.get('personalInfo.lastName').invalid && this.collegeForm.get('personalInfo.lastName').touched;
  }

  get ageFieldInvalid() {
    return this.collegeForm.get('personalInfo.age').invalid && this.collegeForm.get('personalInfo.age').touched;
  }

  get gradeFieldInvalid() {
    return this.collegeForm.get('academicInfo.grade').invalid && this.collegeForm.get('academicInfo.grade').touched;
  }

  get gpaFieldInvalid() {
    return this.collegeForm.get('academicInfo.gpa').invalid && this.collegeForm.get('academicInfo.gpa').touched;
  }

  get applicationTypeFieldInvalid() {
    return this.collegeForm.get('admissionInfo.applicationType').invalid && this.collegeForm.get('admissionInfo.applicationType').touched;
  }

  get admissionapplicationForFieldInvalid() {
    return this.collegeForm.get('admissionInfo.admissionapplicationFor').invalid && this.collegeForm.get('admissionInfo.admissionapplicationFor').touched;
  }

  get courseappliedForFieldInvalid() {
    return this.collegeForm.get('admissionInfo.courseappliedFor').invalid && this.collegeForm.get('admissionInfo.courseappliedFor').touched;
  }

  

  get emailFieldInvalid() {
    return this.collegeForm.get('contactInfo.email').invalid && this.collegeForm.get('contactInfo.email').touched;
  }

  get phoneNumberFieldInvalid() {
    return this.collegeForm.get('contactInfo.phoneNumber').invalid && this.collegeForm.get('contactInfo.phoneNumber').touched;
  }

  onSubmit() {
    if (this.collegeForm.valid) {
      // Form is valid, submit the data
      console.log(this.collegeForm.value);
    } else {
      // Form is invalid, mark all fields as touched to display validation messages
      this.collegeForm.markAllAsTouched();
    }
  }
}
