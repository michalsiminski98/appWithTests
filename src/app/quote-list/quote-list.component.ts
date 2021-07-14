import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() title?: string;
  quotes$?: Observable<Quote[]>;

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quotes$ = this.quotesService.quotes$;
  }

  addRate(rate: number, id: number): void{
    this.quotesService.addRate(rate, id);
  }

}
