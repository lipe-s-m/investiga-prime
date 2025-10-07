import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card } from './Components/card/card';
import { CommonModule } from '@angular/common';
import { questions } from '../../data/questions.mock';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, CommonModule],
})
export default class FaqComponent implements OnInit {
  questions = questions;
  listQuestions = questions;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const cat = params['category'];
      if (cat) {
        this.listQuestions = questions.filter((q) => q.category === cat);
      } else {
        this.listQuestions = questions;
      }
    });
  }
}
