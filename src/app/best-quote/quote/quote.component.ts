import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {

  @Input() author?: string;
  @Input() quotation?: string;
  @Input() rate?: number;

  constructor() { }

}
