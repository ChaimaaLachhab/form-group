import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {BasicTemplateComponent} from "./basic-template/basic-template.component";

export const routes: Routes = [
  { path: '', redirectTo: '/basic-form', pathMatch: 'full' },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'validation-form', component: ValidationFormComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'nested-form-group', component: NestedFormGroupComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: 'basic-template', component: BasicTemplateComponent },
];
