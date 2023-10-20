import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from "rxjs";

export type Transaction = {
  transaction_id: string,
  date: string,
  description: string,
  amount: number,
  type: 'debit' | 'credit',
}

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  apiRoot = '/api';
  http = inject(HttpClient);

  getAccounts(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiRoot}/transactions`).pipe(
      catchError((err) => throwError(() => new Error(err)))
    )
  }
}