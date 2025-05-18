import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getUser(): any {
    return this.userSubject.value;
  }

  getUserObservable(): Observable<any> {
    return this.userSubject.asObservable();
  }

  updateUserFields(updatedFields: Partial<any>) {
    const currentUser = this.userSubject.value;
    this.userSubject.next({ ...currentUser, ...updatedFields });
  }
}