import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;
  isFormInvalid = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private loginService: LoginService,
    ) {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isFormControlInvalid(controlName: string): boolean {
    const control = this.formLogin.get(controlName);
    return control!.invalid && (control!.dirty || control!.touched);
  }

  submitForm() {
    if (this.formLogin.valid) {
      const user = this.formLogin.get('username')?.value;
      this.loginService.setUsername(user);
      this.router.navigate(['/home']);

    } else {
      this.isFormInvalid = true;
    }
  }
}
