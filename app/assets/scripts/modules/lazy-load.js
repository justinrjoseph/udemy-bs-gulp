import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

class LazyLoad {
  constructor() {
    this.images = $('.lazyload');
  }

  refreshWaypoints() {
    this.images.on('load', () => {
      Waypoint.refreshAll();
    });
  }
}

export default LazyLoad;