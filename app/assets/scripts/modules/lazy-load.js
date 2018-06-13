import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

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