import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserDTO, User, Role } from '../models/user.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private config = inject(ConfigService);
  private apiUrl = `${this.config.getApiUrl()}/users`;
  private rolesUrl = `${this.config.getApiUrl()}/roles`;

  createUser(userData: CreateUserDTO): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData);
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl);
  }
}
