import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offset = offset;
  }

  hideItems() {
    this.itemsToReveal.addClass('item-to-reveal');
    return this;
  }

  createWaypoints() {
    const self = this;

    this.itemsToReveal.each(function() {
      const currentItem = this;

      new Waypoint({
        element: currentItem,
        handler: () => {
          $(currentItem).addClass('item-to-reveal--visible');
        },
        offset: self.offset
      });
    });
  }
}

export default RevealOnScroll;