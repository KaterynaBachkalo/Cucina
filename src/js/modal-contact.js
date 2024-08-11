(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openModalContactBtn: document.querySelector('[data-modal-contact-open]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalContactBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    refs.modal.classList.toggle('is-hidden');
    console.log(e.target.nodeName);
    if (e.currentTarget.nodeName === 'svg') {
      console.log(e.target);
      refs.modal.classList.remove('is-hidden');
    } else {
    }
  }
  /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
  // var modalId = this.getAttribute('[data-modal]'),
  //   modalElem = document.querySelector(
  //     '.backdrop[data-modal="' + modalId + '"]'
  //   );
})();
