import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { RegisterRequest } from '../models/auth.request.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  signupForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    password: new FormControl(),
    city: new FormControl()
  });
  signupError: boolean = false;

  async onSignupSubmit() {
    console.log('Signup mode');
    {

      try {
        const request: RegisterRequest = {
          firstname: this.signupForm.value.firstname as string,
          lastname: this.signupForm.value.lastname as string,
          username: this.signupForm.value.lastname as string,

          email: this.signupForm.value.email as string,
          phone: this.signupForm.value.phone as string,
          city: this.signupForm.value.city as string,
          password: this.signupForm.value.password as string,

        };
      } catch (error) {
        console.error('Registration Error', error);
        this.signupError = true;
      }
    }
  }





}
