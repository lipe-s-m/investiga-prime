import { AudioService } from './../../services/audio.service';
import { Component, OnDestroy, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/button/buttons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [ButtonComponent],
  templateUrl: './start.html',
  styleUrls: ['./start.scss', './background.css'],
})
export class Start implements OnDestroy {
  fadeOut = false;
  upScale = false;

  protected readonly title = signal('investiga-prime');
  constructor(private audioService: AudioService, private router: Router) {
    // initialize background audio; browsers may block autoplay until user interaction
    this.audioService.init();
  }
  ngOnDestroy(): void {
    this.audioService.pause();
  }
  goToFAQ() {
    console.log('Navigating to FAQ...');
    this.fadeOut = true;
    this.upScale = true;
    setTimeout(() => {
      this.router.navigate(['/categories']);
    }, 1000);
  }
}
