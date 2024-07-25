import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-basic-template',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './basic-template.component.html',
  styleUrl: './basic-template.component.css'
})
export class BasicTemplateComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
