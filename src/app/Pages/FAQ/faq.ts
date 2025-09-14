import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from './Components/card/card';
import { CommonModule } from '@angular/common';
import { questions } from '../../data/questions.mock';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, CommonModule],
})
export default class FaqComponent {
  questions = questions;
}
