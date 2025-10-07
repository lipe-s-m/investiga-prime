import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/buttons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.html',
  styleUrls: ['./tutorial.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
})
export class Tutorial implements OnInit, OnDestroy {
  readMoreText: string = 'sou a string';
  title: string = 'Titulo não implementado';

  images = localStorage.getItem('image-0');
  constructor(private router: Router) {}
  ngOnDestroy(): void {
    localStorage.removeItem('readMore');
    localStorage.removeItem('title');
    localStorage.removeItem('image-0');
  }
  ngOnInit(): void {
    this.readMoreText = localStorage.getItem('readMore') ?? 'Não implementado';
    this.title = localStorage.getItem('title') ?? 'Titulo não implementado';
    this.readMoreText = this.readMoreText.replace(/\n/g, '<br>');
    this.readMoreText = this.readMoreText.replaceAll('<bold>', '<b>');
    this.readMoreText = this.readMoreText.replaceAll('</bold>', '</b>');

    if (document.getElementById('readMoreText')) {
      document.getElementById('readMoreText')!.innerHTML = this.readMoreText;
    }
  }

  goBack() {
    this.router.navigate(['/categories']);
  }
}
