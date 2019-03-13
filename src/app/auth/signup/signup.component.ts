import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);

    console.log(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
