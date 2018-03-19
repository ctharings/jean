import { Component, OnInit } from '@angular/core';
import { AccountsService, Account } from '../shared';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Account[];
  currentAccount: Account;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.getAccounts();
    this.resetCurrentAccount();
  }

  resetCurrentAccount() {
    this.currentAccount = { id: null, name: { first: '', last: '' }, email: '', transactions: [] };
  }

  selectAccount(account) {
    this.currentAccount = account;
  }

  cancel(account) {
    this.resetCurrentAccount();
  }

  getAccounts() {
    this.accountsService.all()
      .subscribe(accounts => this.accounts = accounts);
  }
}
