import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.scss']
})
export class PopupsComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      participatedplayers: this.fb.array([])
    });
  }

  get participatedPlayersFormArray() {
    return this.profileForm.get('participatedplayers') as FormArray;
  }

  addPlayer() {
    const playerFormGroup = this.fb.group({
      playersname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]]
    });

    this.participatedPlayersFormArray.push(playerFormGroup);
  }

  removePlayer(index: number) {
    this.participatedPlayersFormArray.removeAt(index);
  }

  getPlayerControl(index: number, controlName: string) {
    return this.participatedPlayersFormArray.at(index).get(controlName);
  }
  
}
