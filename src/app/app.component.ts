import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBxkN5en3x31UTZ2fmLclMQpJ9_B1dnosY",
      authDomain: "ng-http-test-f383f.firebaseapp.com"
    });

    this.authService.loadUser();
  }

 /* onNavigate(feature: string) {
    this.loadedFeature = feature;
  }*/
}
