import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit{
  
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      address: this.fb.group({
        // Assuming Indian phone number format
      })
    },
  );
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      console.log('First Name:', this.userForm.value.firstName);
      console.log('Last Name:', this.userForm.value.lastName);
      console.log('Full Name:', this.userForm.value.fullName);
      // You can send the form data to your backend or perform any other actions here
    } else {
      console.log('Form is invalid. Please check your inputs.');
      // Mark all fields as touched to display validation messages
      this.userForm.markAllAsTouched();
    }
  }
}
