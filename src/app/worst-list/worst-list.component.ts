import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-worst-list',
  templateUrl: './worst-list.component.html',
  styleUrls: ['./worst-list.component.css']
})
export class WorstListComponent implements OnInit {

  worstQuotes$?: Observable<Quote[]>;
  @Input() title: string = '';

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.worstQuotes$ = this.quotesService.worstQuotes$;
  }

}
