import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl: string = `https://jsonplaceholder.typicode.com/users`;
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    let url: string = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
}


 // public test:any = new BehaviorSubject<any>([]);

  // setTest(test:any){
  //  test.next(test);
  // }
  // getTest(){
  //   return this.test.asObservable();
  // }