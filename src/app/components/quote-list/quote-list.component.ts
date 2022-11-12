import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes:Quote[] = [];
  constructor(private quoteService:QuoteService) { }

  ngOnInit(): void {
    console.log(1);
    this.quoteService.fetchQuotes().subscribe(
      (response:Quote[]) => {

      console.log(response);
      this.quotes = response;
      },
      (err) =>{
        console.log(err);
      }
    );
    console.log(2)
  }

}
