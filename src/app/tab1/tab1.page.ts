import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) { }
  clickLight() {
    this.router.navigate(['/light']);
  }
  clickHumidifier() {
    this.router.navigate(['/humidifier']);
  }
  clickFan() {
    this.router.navigate(['/fan']);
  }
  clickStove() {
    this.router.navigate(['/stove']);
  }
  clickAir() {
    this.router.navigate(['/air']);
  }
}
