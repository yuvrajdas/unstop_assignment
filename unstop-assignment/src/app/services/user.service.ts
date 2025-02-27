import { Injectable } from '@angular/core';
import { IUserData } from '../interfaces/user-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDataSubject = new BehaviorSubject<IUserData[]>(this.generateRandomUsers());
  userData$ = this.userDataSubject.asObservable();

  constructor() { }

  updateUserData(newData: IUserData) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next([newData, ...currentData]);
  }

  generateRandomUsers(count: number = 10) {
    const roles = ['Admin', 'Editor', 'Viewer'];
    const names = ['Yuvraj', 'Vinay', 'Raju', 'Amit', 'Priya', 'Suman', 'Kiran', 'Rajesh', 'Neha', 'Ankit'];
    const users = [];

    for (let i = 0; i < count; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const email = `${name.toLowerCase()}${i}@gmail.com`;
      const role = roles[Math.floor(Math.random() * roles.length)];

      users.push({ name, email, role });
    }

    return users;
  }

}
