import { constants } from './../../../constants';
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./shopping-list.component.scss');

@customElement('app-shopping-list')
class ShoppingListComponent extends LitElement {
  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              ${constants.SHOPPINGLIST_TITLE}

              <ion-card>
                <ion-item href="#" class="activated">
                  <ion-icon name="wifi" slot="start"></ion-icon>
                  <ion-label>Card Link Item 1 .activated</ion-label>
                </ion-item>

                <ion-item href="#">
                  <ion-icon name="wine" slot="start"></ion-icon>
                  <ion-label>Card Link Item 2</ion-label>
                </ion-item>

                <ion-item class="activated">
                  <ion-icon name="warning" slot="start"></ion-icon>
                  <ion-label>Card Button Item 1 .activated</ion-label>
                </ion-item>

                <ion-item>
                  <ion-icon name="walk" slot="start"></ion-icon>
                  <ion-label>Card Button Item 2</ion-label>
                </ion-item>
              </ion-card>
            </div>
          </div>
        </div>
    `;
  }

}

