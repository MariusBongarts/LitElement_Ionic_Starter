import { NavigationItem } from './../models/types/navigationItem';
import { constants } from './../constants';
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { router } from '@fhms-wi/router';
import { isUndefined } from 'util';

const componentCSS = require('./app.component.scss');

@customElement('app-root')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  headerItems = [
    { title: constants.SIGN_IN, routePath: 'sign-in' },
    { title: constants.SIGN_UP, routePath: 'sign-up' }
  ];

  @property()
  navigationItems: NavigationItem[] = [
    { title: constants.NEWSFEED_TITLE, iconName: 'home', routePath: 'newsfeed', main: true },
    { title: constants.SHOPPINGLIST_TITLE, iconName: 'shopping-cart', routePath: 'shopping-list', main: true },
    { title: constants.FINANCE_TITLE, iconName: 'dollar', routePath: 'finance', main: true },
    { title: constants.SETTINGS, iconName: 'settings', routePath: 'settings', main: false },
    { title: constants.SETTINGS_FLAT, iconName: 'users', routePath: 'flat', main: false }
  ];

  firstUpdated() {
    router.subscribe(path => this.requestUpdate());
  }

  renderRouterOutlet() {
    switch (router.getPath()) {
      case 'sign-in':
        return html`<app-sign-in></app-sign-in>`;
      case 'sign-up':
        return html`<app-sign-up></app-sign-up>`;
      case 'newsfeed':
        return html`<app-newsfeed></app-newsfeed>`;
      case 'shopping-list':
        return html`<app-shopping-list></app-shopping-list>`;
      default:
        return html`<app-newsfeed></app-newsfeed>`;
    }
  }

  render() {
    return html`
        <div class="container-fluid p-0">
          <!-- Top-navigation-bar -->
          <div class="row w-100 p-0 m-0">
            <div class="col-12 p-0 m-0">
              <app-header title=${constants.TITLE} .navigationItems=${this.navigationItems} .linkItems=${this.headerItems}></app-header>
            </div>
          </div>

          <div class="row w-100 h-100 m-0">

            <!-- Left-side-NavBar (Will be hidden on screens smaller than md) -->
            <div class="col-3 d-none d-md-block p-0 navigation">
              <app-navigation .navigationItems=${this.navigationItems}></app-navigation>
            </div>

            <!-- Main Content -->
            <div class="col-9 main p-5">
              ${this.renderRouterOutlet()}
            </div>
          </div>
        </div>
      `;
  }



}


