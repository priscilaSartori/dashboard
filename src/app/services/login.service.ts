import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedInUser: string | null = null;

  constructor() {}

  setUsername(username: string): void {
    localStorage.setItem('login', username);
    this.loggedInUser = localStorage.getItem('login');
  }

  getUsername(): string | null {
    return this.loggedInUser;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  logout(): void {
    this.loggedInUser = null;
  }
}
