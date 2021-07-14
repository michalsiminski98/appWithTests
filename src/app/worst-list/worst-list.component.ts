import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-worst-list',
  templateUrl: './worst-list.component.html',
  styleUrls: ['./worst-list.component.css']
})
export class WorstListComponent {

  worstQuotes$: Observable<Quote[]> = this.quotesService.worstQuotes$;
  @Input() title: string = '';

  constructor(private quotesService: QuotesService) { }
}
