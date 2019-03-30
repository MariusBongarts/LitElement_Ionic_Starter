import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { PropertyCommitter } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import 'side-drawer';

const componentCSS = require('./side-drawer.component.scss');

@customElement('app-drawer')
class SideDrawerComponent extends LitElement {

    static styles = css`${unsafeCSS(componentCSS)}`;

    @property() openDrawer:boolean = false;

    @property()
    navigationItems: Array<{ title: string, routePath: string }> = [];

    firstUpdated() {
        this.openDrawer = false;
    }

    handleClose() {
        this.openDrawer = false;
    }

    render() {
        return html`
        <side-drawer @close=${this.handleClose} id="drawer" ?open=${this.openDrawer}>
        <app-navigation @closeDrawer=${this.handleClose} .navigationItems=${this.navigationItems}></app-navigation>
        </side-drawer>
    `;
    }



}
