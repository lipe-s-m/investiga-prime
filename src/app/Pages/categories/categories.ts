import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { questions } from '../../data/questions.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss', './background.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categories {
  categories: string[] = [];

  constructor(private router: Router) {
    const set = new Set<string>();
    questions.forEach((q) => set.add(q.category || 'Uncategorized'));
    this.categories = Array.from(set);
  }

  openCategory(cat: string) {
    this.router.navigate(['/faq'], { queryParams: { category: cat } });
  }
}
