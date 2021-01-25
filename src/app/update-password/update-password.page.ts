import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {

  myForm: FormGroup;
  password: AbstractControl;
  newpassword: AbstractControl;
  confirmpassword: AbstractControl;
  constructor(private hc: HttpClient, private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group(
      {
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        'newpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        'confirmpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      }
    );
    this.password = this.myForm.controls['password'];
    this.newpassword = this.myForm.controls['newpassword'];
    this.confirmpassword = this.myForm.controls['confirmpassword']
  }
  back() {
    this.router.navigate(['/tabs/tab4']);
  }
  ionViewWillLeave() {
    this.myForm.controls['newpassword'].setValue('');
    this.myForm.controls['password'].setValue('');
    this.myForm.controls['confirmpassword'].setValue('');
  }
  baseUrl = 'http://192.168.43.17:8000/';
  update() {
    var userName = this.authService.currentUser;
    var password = this.myForm.value.password;
    var newpassword = this.myForm.value.newpassword;
    var confirmpassword = this.myForm.value.confirmpassword;
    if (newpassword.length < 6) alert('新密码长度不能小于6位')
    else if (newpassword === confirmpassword) {
      this.hc.post(this.baseUrl + 'login', { userName: userName, password: password }).subscribe((val: any) => {
        if (val.succ) {
          this.hc.post(this.baseUrl + 'update', { userName: userName, password: newpassword }).subscribe((val: any) => {
            if (val.succ) {
              alert('修改成功');
              this.myForm.controls['newpassword'].setValue('');
              this.myForm.controls['password'].setValue('');
              this.myForm.controls['confirmpassword'].setValue('');
            }
            else {
              alert('修改失败');
            }
          })
        }
        else {
          alert('原密码错误');
        }
      })
    }
    else {
      alert('新密码与确认密码内容不一致')
    }
  }

  ngOnInit() {

  }

}
