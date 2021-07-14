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
  // for "quote-list" component
  public quotes$ = this._quotes.asObservable();
  // for "worst-list" component
  public worstQuotes$ = this.quotes$.pipe(map(list => list.filter(quote => quote.rate < 0)));
  // for "best-quote" component
  public bestQuote$ = this.quotes$.pipe(map(list => list.reduce((prev, curr) => {
    return prev.rate > curr.rate ? prev : curr;
  })));

  constructor() { }

  // creating quote by form || used in "add-form" component
  createQuote(author: string, quotation: string){
    // validation
    if(author === "" || quotation === "") return alert("Fill the forms!");
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

  // adding rate by button "+" & "-" in every quote || used in "quote-list" component
  addRate(rate: number, id: number){
    // searching for right quote and change "rate" value
    this.quotes = this.quotes.map(quote => {
      if(quote.id === id){
        const newRate = quote.rate + rate;
        return {...quote, rate: newRate}
      } return quote;
    });
    // pushing new qoutes with corrected rate
    this._quotes.next(this.quotes);
}
}