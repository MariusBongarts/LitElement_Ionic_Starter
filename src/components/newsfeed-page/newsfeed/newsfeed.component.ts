import { constants } from './../../../constants';
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./newsfeed.component.scss');

@customElement('app-newsfeed')
class NewsfeedComponent extends LitElement {
  static styles = css`${unsafeCSS(componentCSS)}`;


  render() {
    return html`
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          ${constants.NEWSFEED_TITLE}
          <h1>Basic usage</h1>
          <ion-button shape="round" fill="outline">Outline + Round</ion-button>
          <!-- Lines -->
          <!-- We add an ion-button with an onclick event -->
          <ion-button onclick="hello()">Click me</ion-button>
          <!-- Checkboxes in a List -->
          <ion-list>
            <ion-item>
              <ion-label>Pepperoni</ion-label>
              <ion-checkbox slot="end" value="pepperoni" checked></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Sausage</ion-label>
              <ion-checkbox slot="end" value="sausage" disabled></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Mushrooms</ion-label>
              <ion-checkbox slot="end" value="mushrooms"></ion-checkbox>
            </ion-item>
          </ion-list>

          <ion-item>
            <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>
            <ion-datetime value="1995-04-15" min="1990-02" max="2000" [dayShortNames]="customDayShortNames" displayFormat="DDD. MMM DD, YY"
              monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des">
            </ion-datetime>
          </ion-item>
        </div>
      </div>
    </div>
    `;
  }

}

