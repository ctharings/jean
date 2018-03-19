import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AccountsService, Account } from '../../shared';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account: Account;

  constructor(
    private accountsService: AccountsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .map((params: ParamMap) => +params.get('id'))
      .switchMap(id => this.accountsService.load(id))
      .subscribe(account => this.account = account);
  }

  saveAccount(account) {
    // Do something
  }

  cancel(account) {
    // Do something
  }

}
