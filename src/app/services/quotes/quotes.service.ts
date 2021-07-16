import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { Quote } from 'src/app/interfaces/quote';
import { QUOTES } from 'src/app/mocks/mock-quotes';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotes: Quote[] = QUOTES.map(quote => ({...quote}));

  private _quotes = new BehaviorSubject<Quote[]>(this.quotes);
  public quotes$ = this._quotes.asObservable();
  public worstQuotes$ = this.quotes$.pipe(map(list => list.filter(quote => quote.rate < 0)));
  public bestQuote$ = this.quotes$.pipe(map(list => list.reduce((prev, curr) => {
    return prev.rate > curr.rate ? prev : curr;
  })));

  constructor() { }

  // creating quote by form
  createQuote(author: string, quotation: string){
    const isQuoteNotValid = author === "" || quotation === "";
    if (isQuoteNotValid) return alert("Fill the forms!");
    // creating new Quote with data from form
    const newQuote: Quote = {
      id: Math.floor(Math.random() * 99999),
      author,
      quotation,
      rate: 0,
    }
    // pushing new quote to service array
    this.quotes = [newQuote, ...this.quotes];
    this._quotes.next(this.quotes);
  };

  addingRate(id: number){
    this.quotes = this.quotes.map(quote => {
      if(quote.id === id){
        return {...quote, rate: quote.rate + 1}
      } return quote;
    });
    this._quotes.next(this.quotes);
}
  subtractingRate(id: number){
    this.quotes = this.quotes.map(quote => {
      if(quote.id === id){
        return {...quote, rate: quote.rate - 1}
      } return quote;
    });
    this._quotes.next(this.quotes);
}
}
