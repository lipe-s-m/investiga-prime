import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from './Components/card/card';
import { CommonModule } from '@angular/common';
import { questions } from '../../data/questions.mock';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, CommonModule, FormsModule],
})
export default class FaqComponent {
  listQuestions = questions;
  inputText: string = '';
  private debouncing: Function;
  constructor() {
    this.debouncing = this.debounce(this.filter.bind(this), 100);
  }
  onInputChange(value: string) {
    this.inputText = value;

    if (this.inputText.length === 0) {
      this.listQuestions = questions;
      return;
    }

    this.debouncing();
  }
  debounce(func: any, delay: number) {
    let timeout: number;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  filter() {
    this.listQuestions = questions.filter((q) => {
      if (
        this.removerAcentos(q.title.toLowerCase()).includes(
          this.removerAcentos(this.inputText.toLowerCase())
        )
      ) {
        return q;
      }
      return;
    });
  }
  removerAcentos(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  onSubmitForm() {
    event?.preventDefault();
    this.filter();
  }
}
