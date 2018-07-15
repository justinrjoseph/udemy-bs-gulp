import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

import PageSection from '../modules/page-section';

class SiteHeader {
  constructor() {
    this.el = $('.site-header');
    this.links = $('.site-nav a');
    this.triggerEl = $('.hero__heading');
    this.pageSection = new PageSection();
  }

  createWaypoint() {
    const self = this;

    new Waypoint({
      element: self.triggerEl[0],
      handler: (direction) => {
        if ( direction === 'down' ) {
          $(self.el).addClass('site-header--dark');
        } else {
          $(self.el).removeClass('site-header--dark');
          $(self.links).removeClass('active');
        }
      }
    });

    return this;
  }

  createPageSectionWaypoints() {
    const self = this;

    this.pageSection.els.each(function() {
      const currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: (direction) => {
          if ( direction === 'down' ) {
            self.links.removeClass('active');

            const matchingLink = $(currentPageSection).data('match');
            $(matchingLink).addClass('active');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: (direction) => {
          if ( direction === 'up' ) {
            self.links.removeClass('active');

            const matchingLink = $(currentPageSection).data('match');
            $(matchingLink).addClass('active');
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default SiteHeader;