import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/buttons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [ButtonComponent],
  templateUrl: './start.html',
  styleUrls: ['./start.scss', './background.css'],
})
export class Start {
  fadeOut = false;
  upScale = false;

  constructor(private router: Router) {}
  goToFAQ() {
    console.log('Navigating to FAQ...');
    this.fadeOut = true;
    this.upScale = true;
    setTimeout(() => {
      this.router.navigate(['/faq']);
    }, 1000);
  }
}
