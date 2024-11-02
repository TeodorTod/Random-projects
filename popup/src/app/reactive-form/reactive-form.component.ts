import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable, of, map } from 'rxjs';

export const forbiddenNameValidator = (names: string[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return names.includes(control.value)
      ? { forbiddenName: 'Name is not allowed' }
      : null;
  };
};

export const asyncRoleValidator = (
  control: AbstractControl,
): Observable<ValidationErrors | null> => {
  const allowedRoles = ['admin', 'dev'];
  return of(control.value).pipe(
    map((value) => {
      return allowedRoles.includes(value)
        ? null
        : { forbiddenRole: 'Role is not allowed' };
    }),
  );
};


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    firstName: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(['test'])],
    }),
    role: this.fb.control('', {asyncValidators: [asyncRoleValidator]}),
  });

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}
