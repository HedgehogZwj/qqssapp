import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  baseUrl = 'http://192.168.43.17:8080/';
  constructor(private router: Router, private hc: HttpClient) { }
  back() {
    this.router.navigate(['/tabs/tab4']);
  }
  c() {
    this.hc.get(this.baseUrl + "tune/" + 1).subscribe((val: any) => {

    })
  }
  d() {
    this.hc.get(this.baseUrl + "tune/" + 2).subscribe((val: any) => {

    })
  }
  e() {
    this.hc.get(this.baseUrl + "tune/" + 3).subscribe((val: any) => {

    })
  }
  f() {
    this.hc.get(this.baseUrl + "tune/" + 4).subscribe((val: any) => {

    })
  }
  g() {
    this.hc.get(this.baseUrl + "tune/" + 5).subscribe((val: any) => {

    })
  }
  a() {
    this.hc.get(this.baseUrl + "tune/" + 6).subscribe((val: any) => {

    })
  }
  b() {
    this.hc.get(this.baseUrl + "tune/" + 7).subscribe((val: any) => {

    })
  }
  c2() {
    this.hc.get(this.baseUrl + "tune/" + 8).subscribe((val: any) => {

    })
  }
  ngOnInit() {
  }

}
