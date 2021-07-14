import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-best-quote',
  templateUrl: './best-quote.component.html',
  styleUrls: ['./best-quote.component.css']
})
export class BestQuoteComponent implements OnInit {

  @Input() title?: string;
  bestQuote$?: Observable<Quote>;

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.bestQuote$ = this.quotesService.bestQuote$;
    

  }
}

