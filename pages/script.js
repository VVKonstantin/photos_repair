const mainForm = document.querySelector('.header__form');
const fieldForm = mainForm.querySelector('.contact-form__input');
const btnForm = mainForm.querySelector('.contact-form__btn');
const spanFormBtn = mainForm.querySelector('.contact-form__btn-text');
const btnImage = mainForm.querySelector('.contact-form__image');

const footerForm = document.querySelector('.footer__form');
const fieldFooterForm = footerForm.querySelector('.contact-form__input');
const btnFooterForm = footerForm.querySelector('.contact-form__btn');
const spanFormFooterBtn = footerForm.querySelector('.contact-form__btn-text');
const btnFooterImage = footerForm.querySelector('.contact-form__image');

function changeBtn(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('header__form') && fieldForm.value) {
    spanFormBtn.textContent = 'Круто, спасибо за доверие!';
    btnImage.classList.add('contact-form__image_nonactive');
  }
  else if (evt.target.classList.contains('footer__form') && fieldFooterForm.value) {
    spanFormFooterBtn.textContent = 'Круто, спасибо за доверие!';
    btnFooterImage.classList.add('contact-form__image_nonactive');
  }
}

mainForm.addEventListener('submit', changeBtn);
footerForm.addEventListener('submit', changeBtn);
