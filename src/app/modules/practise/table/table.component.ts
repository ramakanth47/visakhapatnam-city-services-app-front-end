import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  form: FormGroup;
  displayedColumns: string[] = ['name', 'age'];
  dataSource = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]], // Adjust min and max length as needed
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  addRow() {
    if (this.form.valid) {
      this.dataSource.push({
        name: this.form.get('name').value,
        age: this.form.get('age').value
      });
      this.form.reset();
    }
  }
}
