import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from "../environments/environment.local";
import { Observable } from "rxjs";
import { RegisterRequest } from '../models/auth.request.model';
import { RegisterResponse } from '../models/auth.response.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceapiService {

  private http = inject(HttpClient);
  private authUrl: string = environment.baseUrl + '/author';

  register(registerData: RegisterRequest): Observable<RegisterResponse> {
    const url = `${this.authUrl}/signup`;
    return this.http.post<RegisterResponse>(url, registerData);
  }
}