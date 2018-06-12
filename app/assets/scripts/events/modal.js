import $ from 'jquery';

import Modal from '../modules/modal';

$(() => {
  const modal = new Modal();

  modal.openButton.on('click', () => modal.open());
  modal.closeEl.on('click', () => modal.close());

  $(document).on('keyup', (e) => modal.closeByKey(e));
});