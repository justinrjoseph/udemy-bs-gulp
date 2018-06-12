import $ from 'jquery';

class Modal {
  constructor() {
    this.openButton = $('.open-modal');
    this.el = $('.modal');
    this.closeEl = $('.modal__close');
  }

  open() {
    this.el.addClass('modal--visible');
    return false;
  }

  close() {
    this.el.removeClass('modal--visible');
  }

  closeByKey(e) {
    if ( e.keyCode === 27 ) this.close();
  }
}

export default Modal;