import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../shared';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  originalName: string;
  selectedAccount: Account;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set account(value: Account) {
    if (value) { this.originalName = `${value.name.first} ${value.name.last}`; }
    this.selectedAccount = Object.assign({}, value);
  }
}
