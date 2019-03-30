import { constants } from './../../constants';
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./header.component.scss');

@customElement('app-header')
class HeaderComponent extends LitElement {
  @property()
  title = constants.TITLE;

  @property()
  linkItems: Array<{ title: string, routePath: string }> = [];
  @property()
  navigationItems: Array<{ title: string, routePath: string }> = [];

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  openDrawer = false;

  toggleDrawer() {
    this.openDrawer === true ? this.openDrawer = false : this.openDrawer = true;
  }


  render() {
    return html`
            <app-drawer openDrawer=${this.openDrawer} .navigationItems=${this.navigationItems}></app-drawer>
            <nav class="navbar navbar-expand-md navbar-dark bg-primary">
              <button @click=${this.toggleDrawer} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a href="newsfeed" class="navbar-brand d-flex w-50 ml-auto">${this.title}</a>
              <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                  ${this.linkItems.map((linkItem) => html`<li class="nav-item active"><a class="nav-link" href="${linkItem.routePath}">${linkItem.title}</a></li>`)}
                </ul>
              </div>
            </nav>
    `;
  }
}
