import { NavigationItem } from './../../../models/types/navigationItem';
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { PropertyCommitter } from 'lit-html';
import { constants } from '../../../constants';

const componentCSS = require('./navigation.component.scss');

@customElement('app-navigation')
class NavigationComponent extends LitElement {
    static styles = css`${unsafeCSS(componentCSS)}`;

    @property()
    navigationItems: NavigationItem[] = [];

    emit() {
        this.dispatchEvent(
            new CustomEvent("closeDrawer", {
                bubbles: true
            })
        );
    }

    render() {
        return html`

        <div class="sidebar-sticky pt-5 px-0">

            <!-- Main-Navbar -->
            <ul class="nav flex-column">
                ${this.navigationItems.filter(item => item.main).map((navItem) => html`
                <nav-item @closeDrawer=${this.emit} class="ml-3" .navItem=${navItem}></nav-item>
                `)}
            </ul>

            <hr>

            <!-- Sub-Navbar -->
            <ul class="nav flex-column mb-2 pt-2">
                ${this.navigationItems.filter(item => !item.main).map((navItem) => html`
                <nav-item @closeDrawer=${this.emit} class="ml-1" .navItem=${navItem}></nav-item>
                `)}
            </ul>

        </div>
    `;
    }
}
