import $ from 'jquery';

import SiteHeader from '../modules/site-header';

$(() => {
  const siteHeader = new SiteHeader();

  siteHeader
    .createWaypoint()
    .createPageSectionWaypoints();
});