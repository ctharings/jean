import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
// import { TransactionsComponent } from './accounts/transactions/transactions.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'home' }},
  { path: 'accounts', component: AccountsComponent, data: { animation: 'accounts' } },
  { path: 'account/:id', component: AccountComponent, data: { animation: 'accounts' } },
  // { path: 'transactions', component: TransactionsComponent, data: { animation: 'transactions' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
