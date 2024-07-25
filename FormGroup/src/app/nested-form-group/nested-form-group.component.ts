import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nested-form-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './nested-form-group.component.html',
  styleUrl: './nested-form-group.component.css'
})
export class NestedFormGroupComponent {
  userForm = new FormGroup({
    personalInfo: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    }),
    credentials: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  });

  get personalInfo() {
    return this.userForm.get('personalInfo') as FormGroup;
  }

  get credentials() {
    return this.userForm.get('credentials') as FormGroup;
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
