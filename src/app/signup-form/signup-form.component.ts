import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  signupForm = this.fb.nonNullable.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required], // check validators proper
    phone: [0, Validators.required],
    city: [''],
  });

  loading = false;

  constructor(private fb: FormBuilder) {}

  presetForm() {
    this.signupForm.setValue({
      name: 'name',
      email: 'test@test.com',
      password: '123456',
      phone: 923319999999,
      city: 'Lahore',
    });
    console.log('preset btn :>> ', this.signupForm.value);
  }

  restForm() {
    this.signupForm.reset();
    console.log('reset btn :>> ', this.signupForm.value);
  }

  async submitForm() {
    console.log('submit btn press :>> ', this.signupForm.value);

    // if form is NOT valid, then run this if block
    if (!this.signupForm.valid) {
      // log yiur msg and return from here
      console.log('form is invalid');
      return;
      // i.e dont run below code
    }

    // if code is valid, run this code
    console.log('submit btn :>> ', this.signupForm.value);

    this.loading = true;
    const [success, error] = await this.signupAPI(this.signupForm.value);
    this.loading = false;
    // if (success) {
    //   this.signupForm.reset();
    //   console.log('sucess :>> ');
    // }
    success ? this.successHandler(success) : this.errorHandler(error);
  }
  //
  //
  successHandler(res: any) {
    // handle post api success
    this.signupForm.reset();
    console.log('success', res);
    console.log('body', this.signupForm.value);
  }
  errorHandler(res: any) {
    // handle post api errors
    console.log('error', res);
  }
  //
  //

  signupAPI(body: any): any {
    return new Promise(function (resolve) {
      setTimeout(() => resolve(['test1', 'test2']), 2000);
    });
  }
}
