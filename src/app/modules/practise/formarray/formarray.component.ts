import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([])
    });
    this.addFormItem(); // Add one form item by default
  }

  get formItems() {
    return this.form.get('items') as FormArray;
  }

  addFormItem() {
    const item = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
    this.formItems.push(item);
  }

  removeFormItem(index: number) {
    this.formItems.removeAt(index);
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      console.log(' Name:', this.form.value.Name);
      // Here you can submit the form data
    } else {
      console.log('Form is invalid');
    }
  }
}
