const modalButton = document.querySelector('.modal-btn');
const closeButton = document.querySelector('.modal__btn-close');
const modalWrapper = document.querySelector('.modal-wrapper');

modalButton.addEventListener('click', () => {
  modalWrapper.classList.add('open');
});

closeButton.addEventListener('click', () => {
  modalWrapper.classList.remove('open');
});
