import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {

  @Input() title?: string;
  quotes$: Observable<Quote[]> = this.quotesService.quotes$;

  constructor(private quotesService: QuotesService) { }

  addingRate(id: number): void{
    this.quotesService.addingRate(id);
  }

  subtractingRate(id: number): void{
    this.quotesService.subtractingRate(id);
  }
}
