import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  url:string = "https://dwolverton.github.io/juneteenth/public/api/quotes.json";
  constructor(private http:HttpClient) { }

  fetchQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.url);
  }
}
