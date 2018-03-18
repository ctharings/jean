import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ROUTER_ANIMATION } from './router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ROUTER_ANIMATION]
})
export class AppComponent {
  title = 'JEAN Stack App';
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/accounts', icon: 'list', label: 'Accounts'}
  ];

  constructor() {}

  prepareRouterState(router: RouterOutlet) {
    return router.activatedRouteData['animation'] || 'initial';
  }
}
