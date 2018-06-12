import $ from 'jquery';

import RevealOnScroll from '../modules/reveal-on-scroll';

$(() => {
  const revealFeatureItems = new RevealOnScroll($('.feature-item'), '85%');
  const revealTestimonials = new RevealOnScroll($('.testimonial'), '60%');

  revealFeatureItems
    .hideItems()
    .createWaypoints();

  revealTestimonials
    .hideItems()
    .createWaypoints();
});