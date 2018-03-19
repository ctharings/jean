import { Component, Input } from '@angular/core';
import { Account } from '../../shared';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  originalName: string;
  selectedAccount: Account;
  displayedColumns = ['index', 'amount', 'registered', 'company'];

  @Input() set account(value: Account) {
    if (value) { this.originalName = `${value.name.first} ${value.name.last}`; }
    this.selectedAccount = Object.assign({}, value);
  }
}
