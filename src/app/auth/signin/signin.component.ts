import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinErrorMessage = '';
  private subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.errorMessagesChanged
      .subscribe(
        (errorMsg) => {
          this.signinErrorMessage = errorMsg;
        }
      );
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    if (email && password) {
      this.authService.signinUser(email, password);
      //console.log(this.signinErrorMessage);
    } else {
      console.log('nope');
    }

    console.log(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
