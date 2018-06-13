import $ from 'jquery';

import LazyLoad from '../modules/lazy-load';

$(() => {
  const lazyLoad = new LazyLoad();

  lazyload.refreshWaypoints();
});