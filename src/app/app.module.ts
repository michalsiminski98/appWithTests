import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HideButtonComponent } from './hide-button/hide-button.component';
import { AddFormComponent } from './add-form/add-form.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { BestQuoteComponent } from './best-quote/best-quote.component';
import { WorstListComponent } from './worst-list/worst-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteComponent } from './best-quote/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HideButtonComponent,
    AddFormComponent,
    QuoteListComponent,
    BestQuoteComponent,
    WorstListComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
