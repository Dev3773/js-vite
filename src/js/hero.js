// Modal window handle

const openBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.btn-x');
const modal = document.querySelector('.modal-overlay');

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}
  