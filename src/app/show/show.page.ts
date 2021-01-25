import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private router: Router) { }
  continue() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
