import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private isInitialized = false;

  init(src = '/assets/audio.mp3') {
    if (this.isInitialized) return;
    this.isInitialized = true;

    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.035; // default low volume
    this.audio = audio;

    // Try autoplay; browsers may block this unless user interacted
    audio.play().catch(() => {
      // If autoplay blocked, wait for first user interaction to play
      const tryPlay = () => {
        audio.play().catch(() => {
          /* still blocked */
        });
        window.removeEventListener('click', tryPlay);
        window.removeEventListener('keydown', tryPlay);
      };
      window.addEventListener('click', tryPlay, { once: true });
      window.addEventListener('keydown', tryPlay, { once: true });
    });
  }

  play() {
    this.audio?.play().catch(() => {});
  }

  pause() {
    this.audio?.pause();
  }

  setVolume(v: number) {
    if (!this.audio) return;
    this.audio.volume = Math.max(0, Math.min(1, v));
  }
}
