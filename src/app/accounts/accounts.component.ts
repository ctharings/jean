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

  saveAccount(account) {
    if (!account.id) {
      this.createAccount(account);
    } else {
      this.updateAccount(account);
    }
  }

  createAccount(account) {
    this.accountsService.create(account)
      .subscribe(response => {
        this.getAccounts();
        this.resetCurrentAccount();
      });
  }

  updateAccount(account) {
    this.accountsService.update(account)
      .subscribe(response => {
        this.getAccounts();
        this.resetCurrentAccount();
      });
  }

  deleteAccount(account) {
    this.accountsService.delete(account)
      .subscribe(response => {
        this.getAccounts();
        this.resetCurrentAccount();
      });
  }
}
