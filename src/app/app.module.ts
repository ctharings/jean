import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AccountsService } from './shared';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { TransactionsComponent } from './accounts/transactions/transactions.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './accounts/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    AccountsListComponent,
    TransactionsComponent,
    AccountComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
