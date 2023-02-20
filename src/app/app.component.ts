import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-npm-library';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  });
  pageType?: string;
  showPassword: boolean = true;


  login() {
    console.log(this.loginForm.value);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  
}
