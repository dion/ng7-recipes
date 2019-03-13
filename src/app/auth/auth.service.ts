import { Router } from '@angular/router';
import * as firebase from 'firebase';
//import * as firebase from 'firebase/app';
//import firebase from 'firebase';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  token: string;
  errorMessages = '';
  errorMessagesChanged = new Subject<string>();

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token
              }
            );
        }
      )
      .catch(
        error => {
          console.log(error);
          //this.errorMessages = error;
          this.errorMessagesChanged.next(error);
        }
      );

    /*firebase.auth().EmailAuthProvider.credential(email, password)
      .catch(
        error => console(error);
      );*/
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token
              }
            );
        }
      )
      .catch(
        (error: any) => {
          // create an observable above in the class and have the signin.component.ts subscribe to it
          // have this update the observable and next() 
          // TODO change this to a method
          this.errorMessages = error;
          this.errorMessagesChanged.next(this.errorMessages);
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  loadUser() {
    firebase.auth().onAuthStateChanged(
      (currentUser) => {
        console.log(currentUser);
        if (currentUser === null) {
          this.token = null;
        } else {
          currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      }
    );
  }
 
}  