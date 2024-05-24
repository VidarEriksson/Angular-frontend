import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from "../environments/environment.local";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserserviceapiService {

    private http = inject(HttpClient);
  private authUrl: string = environment.baseUrl + 'author';

  register(registerData: RegisterRequest): Observable<RegisterResponse> {
    const url = `${this.authUrl}/users/register`;
    return this.http.post<RegisterResponse>(url, registerData);
}
}