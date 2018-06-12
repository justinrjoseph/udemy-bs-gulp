import $ from 'jquery';

import SiteHeader from './site-header';

class MobileMenu {
  constructor() {
    this.icon = $('.site-header__menu-icon');
    this.content = $('.site-header__menu');
  }

  toggle() {
    const siteHeader = new SiteHeader();

    siteHeader.el.toggleClass('site-header--expanded');

    this.content.toggleClass('site-header__menu--visible');
    this.icon.toggleClass('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;