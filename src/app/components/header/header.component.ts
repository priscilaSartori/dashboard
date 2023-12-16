import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  usuario: string | null = null;

  constructor(
    private router: Router,
    public dialog: MatDialog, 
  ) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.usuario = localStorage.getItem('login');
      console.log(this.usuario)
    }
  }

  toggleProfile() {
    this.dialog.open(ProfileComponent);
  }

  toggleChangePassword() {
    this.dialog.open(ChangePasswordComponent);
  }

  deslogar() {
    this.router.navigate(['/']);
    localStorage.removeItem('login');
  }
}
