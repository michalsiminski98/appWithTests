import { Component } from '@angular/core';
import { QuotesService } from '../services/quotes/quotes.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  author: string = "";
  quotation: string = "";

  constructor(private quotesService: QuotesService) { }

  createQuote(author: string, quotation: string): void{
    this.quotesService.createQuote(author, quotation);
  }
}
