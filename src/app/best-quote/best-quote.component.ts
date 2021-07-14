import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-best-quote',
  templateUrl: './best-quote.component.html',
  styleUrls: ['./best-quote.component.css']
})
export class BestQuoteComponent {

  @Input() title?: string;
  bestQuote$?: Observable<Quote> = this.quotesService.bestQuote$;

  constructor(private quotesService: QuotesService) { }
}

