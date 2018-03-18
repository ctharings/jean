import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Account } from '../../shared';
import { trigger, transition, group, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':enter, :leave, * => pending', []),
      transition('* => *', [
        // animate both the newly entered and removed accounts on the page
        // at the same time
        group([
          query(':enter', [
            style({ opacity: 0, height: '0px' }),
            stagger('50ms', [
              animate('500ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ], { optional: true }),

          query(':leave', [
            stagger('50ms', [
              animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, height: '0px', borderTop: 0, borderBottom: 0 }))
            ])
          ], { optional: true })
        ]),
      ]),
    ]),
  ]
})
export class AccountsListComponent implements OnInit {
  @Input() accounts: Account[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  animationsDisabled = true;

  trackAccount(index, account) {
    return account.id;
  }

  ngOnInit() {
    setTimeout(() => {
      this.animationsDisabled = false;
    }, 500);
  }

  prepareListState() {
    return this.accounts ? this.accounts.length : 'pending';
  }
}
