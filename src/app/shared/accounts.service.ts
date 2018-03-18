import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account.model';

const BASE_URL = 'http://localhost:3000/accounts/';

const HEADER = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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

  create(account: Account) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(account), HEADER);
  }

  update(account: Account) {
    return this.http.patch(`${BASE_URL}${account.id}`, JSON.stringify(account), HEADER);
  }

  delete(account: Account) {
    return this.http.delete(`${BASE_URL}${account.id}`);
  }
}
