import { Component, OnInit } from '@angular/core';
import { AccountsService, Account } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accounts: Account[];

  constructor(
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountsService.all()
      .subscribe(accounts => this.accounts = accounts );
  }

  handleResults(accounts) {
    this.accounts = accounts;
  }
}
