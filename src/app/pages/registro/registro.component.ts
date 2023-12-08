import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  formRegistration: FormGroup;
  isFormInvalid = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formRegistration = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]],
      role: ['', Validators.required]});
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = this.formRegistration?.get('password')?.value;
    const confirmPassword = control.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  

  isFormControlInvalid(controlName: string): boolean {
    const control = this.formRegistration.get(controlName);
    return control!.invalid && (control!.dirty || control!.touched);
  }

  submitForm() {
    if (this.formRegistration.valid) {
      this.router.navigate(['/']);
      console.log('Cadastro bem-sucedido!', this.formRegistration.value);
    } else {
      this.isFormInvalid = true;
      console.log('Formulário inválido. Corrija os erros.');
    }
  }
}

