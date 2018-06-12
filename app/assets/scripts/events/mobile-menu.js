import $ from 'jquery';

import MobileMenu from '../modules/mobile-menu';

$(() => {
  const mobileMenu = new MobileMenu();

  mobileMenu.icon.on('click', () => mobileMenu.toggle());
});