import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  constructor(private fb: FormBuilder, private hc: HttpClient, private router: Router, private authService: AuthService) {
    this.myForm = this.fb.group(
      {
        'userName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      }
    );
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }
  ngOnInit() {
  }
  ionViewWillLeave() {
    this.myForm.controls['userName'].setValue('');
    this.myForm.controls['password'].setValue('');
  }
  login() {
    if (this.myForm.value.userName == "zzy" && this.myForm.value.password == "123456") {
      this.authService.login();
      this.authService.currentUser = "zzy";
      this.router.navigate(['/tabs/tab1'])
    }
    else if (this.myForm.value.userName == "wl" && this.myForm.value.password == "123456") {
      this.authService.login();
      this.authService.currentUser = "wl";
      this.router.navigate(['/tabs/tab1'])
    }
  }
}
