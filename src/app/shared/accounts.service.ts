import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account.model';

const BASE_URL = 'http://localhost:3000/accounts/';

@Injectable()
export class AccountsService {
  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get<Account[]>(BASE_URL);
  }

  load(id) {
    return this.http.get<Account>(`${BASE_URL}${id}`);
  }
}
