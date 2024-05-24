import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    
    { path: '', title: "Login Page", component: LoginComponent },
    { path: 'login', title: "Login Page", component: LoginComponent},
    
    { path: 'register', title: "Register Page", component: RegisterComponent}
    
];



