import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _httpClient: HttpClient) { }

  public getTransactions() {
    return this._httpClient.get('/api/transactions')
      .map(result => this.result = result.json().data);
  }

}
