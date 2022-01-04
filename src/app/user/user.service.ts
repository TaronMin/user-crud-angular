import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class UserService {

  url: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  private getUrl(option: string) {
    return `${this.url}` + option;
  }

  get(): Observable<User> {
    return this.http.get<User>(this.getUrl("user"));
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(this.getUrl(`user/${id}`));
  }

  put(user: User): Observable<User> {
    return this.http.put<User>(this.getUrl(`user/${user.id}`), user);
  }

  delete(user: any): Observable<any> {
    return this.http.delete<User>(this.getUrl(`user/${user.id}`), user);
  }

  post(user: User): Observable<User> {
    return this.http.post<User>(this.getUrl("user/"), user);
  }
}
