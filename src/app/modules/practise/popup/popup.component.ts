import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent  {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      personalInfo: this.fb.group({
        sportsName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        playersName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        
      }),
      personality: this.fb.group({
        age: ['', [Validators.required, Validators.min(0), Validators.max(70)]], 
        height: ['', [Validators.required, Validators.min(0), Validators.max(100)]], 
        weight: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      }),
      participatedplayers: this.fb.group({
        playersname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], // Example min and max lengths
        firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], // Example min and max lengths
        lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]] // Example min and max lengths
      }),
      
    });
  }

  // Function to submit the form
  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      console.log('Players Name:', this.profileForm.value.personalInfo.playersName);
      console.log('Sports Name:', this.profileForm.value.personalInfo.sportsName);
      // Here you can submit the form to a backend service
    } else {
      console.log("Form is invalid");
    }
  }
  
} 

  
  



