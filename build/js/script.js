'use strict';

/* Programms Tabs */

var comonBtn = document.querySelector('.programs__tabs-btn--comon');
var academBtn = document.querySelector('.programs__tabs-btn--academ');
var practBtn = document.querySelector('.programs__tabs-btn--pract');
var volunteerBtn = document.querySelector('.programs__tabs-btn--volunteer');
var religionBtn = document.querySelector('.programs__tabs-btn--religion');

function openTabs(btn, programm) {
  btn.addEventListener('click', function (event) {
    openProgramm(event, programm);
  });
}

function openProgramm(evt, progName) {
  var i;
  var tabcontent;
  var tablinks;
  tabcontent = document.querySelectorAll('.programs__tabs-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.querySelectorAll('.programs__tabs-btn');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' programs__tabs-btn--active', '');
  }
  document.getElementById(progName).style.display = 'block';
  evt.currentTarget.className += ' programs__tabs-btn--active';
}

openTabs(comonBtn, 'common');
openTabs(academBtn, 'academ');
openTabs(practBtn, 'pract');
openTabs(volunteerBtn, 'volunteer');
openTabs(religionBtn, 'religion');

document.getElementById('defaultOpen').click();
/* Programms Tabs END*/

// basic slider prefferences

// eslint-disable-next-line
var swiper = Swiper;
var init = false;

function swiperMode() {
  var mobile = window.matchMedia('(min-width: 0px) and (max-width: 1200px)');
  var desktop = window.matchMedia('(min-width: 1201px)');

  if (mobile.matches) {
    if (!init) {
      init = true;
      // eslint-disable-next-line
      swiper = new Swiper('.slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        wrapperClass: 'slider__list',
        slideClass: 'slider__item',
        slideActiveClass: 'slider__item--active',
        slideNextClass: 'slider__next',
        slidePrevClass: 'slider__prev',
        slideDuplicatePrevClass: 'slider__duplicate-prev',
        slideDuplicateNextClass: 'slider__duplicate-next',
        loop: true,
        pagination: {
          el: '.slider__bullets',
          type: 'bullets',
          bulletElement: 'button',
          bulletClass: 'slider__bullet',
          bulletActiveClass: 'slider__bullet--active',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          960: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      });
    }
  } else if (desktop.matches) {
    // swiper.destroy();
    init = false;
  }
}

window.addEventListener('load', function () {
  swiperMode();
});

window.addEventListener('resize', function () {
  swiperMode();
});

/* Accordion */

var accordion = document.querySelectorAll('.faq__accordion-btn');
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    // eslint-disable-next-line
    this.classList.toggle('faq__accordion-content--active');
    // eslint-disable-next-line
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

/* Slider Testimonials */
// eslint-disable-next-line
var swiper = new Swiper('.testimonials__slider-container', {
  spaceBetween: 0,
  slidesPerView: 1,
  wrapperClass: 'testimonials__list',
  slideClass: 'testimonials__item',
  slideActiveClass: 'testimonials__item--active',
  slideNextClass: 'testimonials__item-next',
  slidePrevClass: 'testimonials__item-prev',
  slideDuplicatePrevClass: 'testimonials__item-duplicate-prev',
  slideDuplicateNextClass: 'testimonials__item-duplicate-next',
  loop: true,
  pagination: {
    el: '.testimonials__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.testimonials__btn-next',
    prevEl: '.testimonials__btn-prev',
  },
});

// Modals And Forms

var SUCCESS_BORDER_COLOR = '#484848';
var ERROR_BORDER_COLOR = '#ff0000';
var ERROR_MESSAGE = '<p class="form-error">Не правильно заполненно поле</p>';
var ERROR_CLASS = '.form-error';
var ERROR_MESSAGE_PLACE = 'beforeEnd';
var PHONE_STRING_LENGTH = 16;
var NAME_STRING_LENGTH = 2;
var callBackLink = document.querySelector('.header__callback');
var modalCallback = document.querySelector('.modals--callback');
var modalSent = document.querySelector('.modals--sent');
var modalCloseBtn = document.querySelectorAll('.modals__close-btn');
var displayNoneClass = 'modals--hide';
var inputName = document.querySelector('.modals__input-name');
var body = document.querySelector('body');

var toGoFormitem = document.querySelector('.to-go__form-item');
var toGoPhoneNumber = document.querySelector('#to-go__phone-number');
var toGoBtnSubmit = document.querySelector('.to-go__btn-submit');

var ctaFormitemName = document.querySelector('.call-to-action__form-item--name');
var ctaFormitemPhone = document.querySelector('.call-to-action__form-item--phone');
var ctaPhoneNumber = document.querySelector('#call-to-action__phone-number');
var ctaNameValue = document.querySelector('#call-to-action__name');
var ctaBtnSubmit = document.querySelector('.call-to-action__btn-submit');

var modalFormitemName = document.querySelector('.modals__form-item--name');
var modalFormitemPhone = document.querySelector('.modals__form-item--phone');
var modalPhoneNumber = document.querySelector('#modals__phone-number');
var modalNameValue = document.querySelector('#modals__name');
var modalBtnSubmit = document.querySelector('.modals__btn-submit');

var modalDoneBtn = document.querySelectorAll('.modals__done-btn');

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

// window.IMask(document.querySelector('#to-go__phone-number'), {mask: '+{7}(000)000-00-00'});
// window.IMask(document.querySelector('#call-to-action__phone-number'), {mask: '+{7}(000)000-00-00'});
// window.IMask(document.querySelector('.modals__form-item--phone'), {mask: '+{7}(000)000-00-00'});

// var toGoPhoneNumberMask = IMask(toGoPhoneNumber, maskOptions);
// var ctaPhoneNumberMask = IMask(ctaPhoneNumber, maskOptions);
// var modalPhoneNumberMask = IMask(modalPhoneNumber, maskOptions);

// eslint-disable-next-line
IMask(toGoPhoneNumber, maskOptions);
// eslint-disable-next-line
IMask(ctaPhoneNumber, maskOptions);
// eslint-disable-next-line
IMask(modalPhoneNumber, maskOptions);

function setDataFromeStorage(el, val) {
  if (localStorage.getItem(val) !== null) {
    el.value = localStorage.getItem(val);
  } else {
    el.value = '';
  }
}

setDataFromeStorage(toGoPhoneNumber, 'toGoPhone');
setDataFromeStorage(ctaPhoneNumber, 'ctaPhone');
setDataFromeStorage(ctaNameValue, 'ctaName');
setDataFromeStorage(modalPhoneNumber, 'modalPhone');
setDataFromeStorage(modalNameValue, 'modalName');

function modalOpening(btn, modal, className) {

  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove(className);

    inputName.focus();
    body.classList.add('body-lock');
  });
}

function modalClosing(btn, modal, className) {
  // eslint-disable-next-line
  for (var i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add(className);
      // enableScroll();
      body.classList.remove('body-lock');
    });
  }

  window.addEventListener('click', function (evt) {
    // eslint-disable-next-line
    if (evt.target == modal) {
      modal.classList.add(className);
      body.classList.remove('body-lock');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!modal.classList.contains(className)) {
        modal.classList.add(className);
        // enableScroll();
        body.classList.remove('body-lock');
      }
    }
  });
}

function displaySentSuccessfull(modal, phoneElem, phoneKey, nameElem, nameKey) {
  modal.classList.remove(displayNoneClass);

  if (localStorage.getItem(phoneKey) !== null) {
    localStorage.setItem(phoneKey, '');
  }

  if (localStorage.getItem(nameKey) !== null) {
    localStorage.setItem(nameKey, '');
  }

  var phoneValue = phoneElem.value;
  localStorage.setItem(phoneKey, phoneValue);

  var nameValue = nameElem.value;
  localStorage.setItem(nameKey, nameValue);


  if (!modalCallback.classList.contains(displayNoneClass)) {
    modalCallback.classList.add(displayNoneClass);
  }
  body.classList.add('body-lock');
}

modalOpening(callBackLink, modalCallback, displayNoneClass);
modalClosing(modalCloseBtn, modalCallback, displayNoneClass);
modalClosing(modalCloseBtn, modalSent, displayNoneClass);
modalClosing(modalDoneBtn, modalSent, displayNoneClass);


// Form Validation

function deleteErrorMessage(el) {
  if (el.querySelector(ERROR_CLASS) !== null) {
    el.querySelector(ERROR_CLASS).remove();
  }
}

function addErrorMessage(container) {
  container.insertAdjacentHTML(ERROR_MESSAGE_PLACE, ERROR_MESSAGE);
}

function validateField(container, field, fieldLength) {
  if (field.value.length >= fieldLength) {
    field.style.borderColor = SUCCESS_BORDER_COLOR;

    deleteErrorMessage(container);
  } else {

    deleteErrorMessage(container);
    addErrorMessage(container);

    field.style.borderColor = ERROR_BORDER_COLOR;
  }
}

toGoBtnSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();

  validateField(toGoFormitem, toGoPhoneNumber, PHONE_STRING_LENGTH);

  if (toGoPhoneNumber.value.length >= PHONE_STRING_LENGTH) {
    displaySentSuccessfull(modalSent, toGoPhoneNumber, 'toGoPhone', ctaNameValue, 'toGoName');
  }
});


ctaBtnSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();

  validateField(ctaFormitemName, ctaNameValue, NAME_STRING_LENGTH);
  validateField(ctaFormitemPhone, ctaPhoneNumber, PHONE_STRING_LENGTH);

  if (ctaNameValue.value.length >= NAME_STRING_LENGTH && ctaPhoneNumber.value.length >= PHONE_STRING_LENGTH) {
    displaySentSuccessfull(modalSent, ctaPhoneNumber, 'ctaPhone', ctaNameValue, 'ctaName');
  }
});

modalBtnSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();

  validateField(modalFormitemName, modalNameValue, NAME_STRING_LENGTH);
  validateField(modalFormitemPhone, modalPhoneNumber, PHONE_STRING_LENGTH);

  if (modalNameValue.value.length >= NAME_STRING_LENGTH && modalPhoneNumber.value.length >= PHONE_STRING_LENGTH) {
    displaySentSuccessfull(modalSent, modalPhoneNumber, 'modalPhone', modalNameValue, 'modalName');
  }
});
