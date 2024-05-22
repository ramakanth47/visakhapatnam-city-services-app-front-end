import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,  Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required],
      })
    });
  }

  // Function to submit the form
  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      console.log('First Name:', this.profileForm.value.personalInfo.firstName);
      console.log('Last Name:', this.profileForm.value.personalInfo.lastName);
      // Here you can submit the form to a backend service
    } else {
      console.log("Form is invalid");
    }
  }
  
  }

 





