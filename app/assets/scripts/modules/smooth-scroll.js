import SiteHeader from './site-header';
import 'jquery-smooth-scroll';

class SmoothScroll {
  constructor() {
    this.siteHeader = new SiteHeader();
  }

  enable() {
    this.siteHeader.links.smoothScroll();
  }
}

export default SmoothScroll;