import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    QuoteItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
