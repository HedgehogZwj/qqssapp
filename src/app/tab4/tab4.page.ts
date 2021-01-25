import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  exit() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  toUpdate() {
    this.router.navigate(['/update-password']);
  }
  toGame() {
    this.router.navigate(['/game'])
  }
  ngOnInit() {
  }

}
