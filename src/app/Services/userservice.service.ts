import { Injectable, inject } from "@angular/core";
import { UserserviceapiService } from "./userservice.api.service";
import { RegisterRequest } from "../models/auth.request.model";
import { RegisterResponse } from "../models/auth.response.model";
import { firstValueFrom, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private apiSvc = inject(UserserviceapiService);

  public async register(registerData: RegisterRequest): Promise<RegisterResponse> {
    const response = await firstValueFrom(this.apiSvc.register(registerData));
    console.log('Sending registerresponse:', response);
    return response;
  }
}

