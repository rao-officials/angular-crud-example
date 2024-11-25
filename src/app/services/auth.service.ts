import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,) { }

  signup(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          observer.next(userCredential);
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
