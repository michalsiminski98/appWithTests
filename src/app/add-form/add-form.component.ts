import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuotesService } from '../services/quotes/quotes.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  quoteForm = this.fb.group({
    author: ['', Validators.required],
    quotation: ['', Validators.compose([Validators.minLength(5),Validators.maxLength(200)])]
  })

  constructor(private quotesService: QuotesService, private fb: FormBuilder) { }

  createQuote(author: string, quotation: string): void{
    this.quotesService.createQuote(author, quotation);
  }
}
