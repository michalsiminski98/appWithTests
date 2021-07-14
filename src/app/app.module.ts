import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HideButtonComponent } from './hide-button/hide-button.component';
import { AddFormComponent } from './add-form/add-form.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { BestQuoteComponent } from './best-quote/best-quote.component';
import { WorstListComponent } from './worst-list/worst-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HideButtonComponent,
    AddFormComponent,
    QuoteListComponent,
    BestQuoteComponent,
    WorstListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
