import { NavigationItem } from './../../../models/types/navigationItem';
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { PropertyCommitter } from 'lit-html';
import { constants } from '../../../constants';
import { router } from '@fhms-wi/router';
import { guard } from 'lit-html/directives/guard';


const componentCSS = require('./nav-item.component.scss');

@customElement('nav-item')
class NavigationComponent extends LitElement {
    static styles = css`${unsafeCSS(componentCSS)}`;

    @property()
    activePage = router.getPath();

    @property()
    navItem!: NavigationItem;

    firstUpdated() {
        router.subscribe(path => {
            this.activePage = router.getPath();
        })
    }

    render() {
        return html`
        <li @click=${this.emit} class="nav-item p-1">
            <a class="nav-link ${this.navItem.routePath === router.getPath() ? 'active' : ''}" href="${this.navItem.routePath}">
                <div class="row">
                    <div class="col-auto">
                        <svg-icon iconName=${this.navItem.iconName}></svg-icon>
                    </div>
                    <div id="title" class="col-auto px-0 px-lg-2">${this.navItem.title}<span class="sr-only">(current)</span></div>
                </div>
            </a>
        </li>`
    }

    emit() {
        this.dispatchEvent(
            new CustomEvent("closeDrawer", {
                bubbles: true
            })
        );
    }



}
