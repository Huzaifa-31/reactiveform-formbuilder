import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  loading = false;

  async submitForm() {
    console.log('body async :>> ', this.loginForm.value);
    this.loading = true;
    await this.loginApi(this.loginForm.value);
    // this.loginForm.reset();
    this.loading = false;
  }

  presetForm() {
    // this.email.setValue('test@test.com');
    // this.password.setValue('123456');
    // console.log('this.email :>> ', this.email);

    // this.loginForm.patchValue({
    //   email: 'test@test.com',
    // });

    this.loginForm.setValue({
      email: 'hfvevhelvlke',
      password: 'flhwfwjfhwjk',
    });
    console.log('loginForm :>> ', this.loginForm.valid);
  }

  restForm() {
    // this.email.reset();
    // this.password.reset();
    this.loginForm.reset();
    console.log('loginForm reset :>> ', this.loginForm.valid);
  }

  loginApi(body: any) {
    // console.log('loginApi :>> ', this.loginForm.value);
    return new Promise(function (resolve) {
      setTimeout(resolve, 3000);
    });
  }
}
