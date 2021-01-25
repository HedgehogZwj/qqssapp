import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { device } from "../device";

@Component({
  selector: 'app-stove',
  templateUrl: './stove.page.html',
  styleUrls: ['./stove.page.scss'],
})
export class StovePage implements OnInit {

  myForm: FormGroup;
  id: AbstractControl;
  type: AbstractControl;
  status: AbstractControl;
  info: AbstractControl;
  device$: Observable<device>;  //设置成可观察对象,获取设备数据,$表示是异步对象
  baseUrl = "http://192.168.43.17:8000/"
  currentUser: device;
  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {
    this.myForm = this.fb.group({
      'id': [''],
      'type': [''],
      'status': [''],
      'info': [''],
    });

    this.id = this.myForm.controls['id'];
    this.type = this.myForm.controls['type'];
    this.status = this.myForm.controls['status'];
    this.info = this.myForm.controls['info'];

  }
  select(stove: device) {
    this.myForm.controls['id'].setValue(stove.id);
    this.myForm.controls['type'].setValue(stove.type);
    this.myForm.controls['status'].setValue(stove.status);
    this.myForm.controls['info'].setValue(stove.info);
  }
  ngOnInit(): void {//实现页面的初始化
    this.init();
    this.device$ = <Observable<device>>this.httpClient.get(this.baseUrl + 'device/stove/0');
  }
  init() {
    this.myForm.controls['id'].setValue('');
    this.myForm.controls['type'].setValue('');
    this.myForm.controls['status'].setValue('');
    this.myForm.controls['info'].setValue('');
  }
  back() {
    this.router.navigate(['/tabs/tab1']);
    this.init();
  }
  search() {
    if (this.id.value) {
      this.device$ = <Observable<device>>this.httpClient.get(this.baseUrl + 'device/stove/' + this.id.value);
      this.init();
    }
    else {
      this.device$ = <Observable<device>>this.httpClient.get(this.baseUrl + 'device/stove/0');
      this.init();
    }
  }


  add() {
    this.httpClient.post(this.baseUrl + 'device', this.myForm.value).subscribe(
      (val: any) => {
        // alert('添加成功!');
        this.init();
        this.device$ = <Observable<device>>this.httpClient.get(this.baseUrl + 'device/stove/0');
      }
    );
  }


  delete() {
    this.currentUser = this.myForm.value;
    if (this.currentUser.id == '') {
      alert('必须先选择设备!');
    } else {
      this.httpClient.delete(this.baseUrl + 'device/stove/' +
        this.currentUser.id).subscribe(
          (val: any) => {
            // alert('删除成功!');
            this.init();
            this.device$ = <Observable<device>>this.httpClient.get(this.baseUrl + 'device/stove/0');
          }
        );
    }
  }

  update() {
    this.currentUser = this.myForm.value;
    if (!this.currentUser) {
      alert('必须先选择设备!');
    } else {
      this.httpClient.put(this.baseUrl + 'device',
        this.myForm.value).subscribe(
          (val: any) => {
            if (val.succ) {
              // alert('修改成功!');
              this.init();
              this.device$ = <Observable<device>>this.httpClient.get(this.baseUrl + 'device/stove/0');
            }
          }
        );
    }

  }

}
