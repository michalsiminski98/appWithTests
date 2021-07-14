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

  addingRate(id: number): void{
    this.quotesService.addingRate(id);
  }

  subtractingRate(id: number): void{
    this.quotesService.subtractingRate(id);
  }

}
