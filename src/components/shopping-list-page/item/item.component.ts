import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./item.component.scss');

@customElement('app-item')
class ItemComponent extends LitElement {
  static styles = css`${unsafeCSS(componentCSS)}`;

  
  render() {
    return html`
      Item Component
    `;
  }

}

