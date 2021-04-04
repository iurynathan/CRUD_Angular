import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Users } from './users/users.model';
import { Resources } from './resources/resources.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl = "https://reqres.in/api/users";
  loginUrl = "https://reqres.in/api/login";
  registerUrl = "https://reqres.in/api/register";
  resourcesBaseUrl = "https://reqres.in/api/unknown"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    ) { }

    public value!: string;

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3500,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  readUsers(page: string): Observable<Users> {
    const url = `${this.baseUrl}?page=${page}`
    return this.http.get<Users>(url);
  }

  create(user: Users): Observable<Users> {
    console.log(user)
    return this.http.post<Users>(this.baseUrl, user);
  }

  readById(id: string | null): Observable<Users> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Users>(url);
  }

  update(users: Users): Observable<Users> {
    const url = `${this.baseUrl}/${users.id}`;
    return this.http.put<Users>(url, users);
  }

  delete(id: string | null): Observable<Users> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Users>(url);
  }

  registerId(valueId:string) {
    this.value = valueId;
    return this.value;
  }

  login(login: Users): Observable<Users> {
    return this.http.post<Users>(this.loginUrl, login);
  }

  registerUser(register: Users) {
    return this.http.post<Users>(this.registerUrl, register);
  }

  readResources(): Observable<Resources> {
    return this.http.get<Resources>(this.resourcesBaseUrl);
  }
}
