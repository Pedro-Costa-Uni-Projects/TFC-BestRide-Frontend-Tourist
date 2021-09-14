import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  constructor(private router: Router, private comp: AppComponent) {}

  ngOnInit() {
    setTimeout(() => {
      //check for automatic login
      const confirm_automatic = localStorage.getItem('automatic_login');
      if (confirm_automatic === 'true') {
        this.router.navigate(['/home_tab']);
      } else {
        this.router.navigate(['/login']);
      }
    }, 2000);
    this.comp.hide_tab = true;
  }
}
