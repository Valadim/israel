'use strict';

/* Programms Tabs */
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

document.getElementById('defaultOpen').click();
/* Programms Tabs END*/


// basic slider prefferences

var swiper = Swiper;
var init = false;

function swiperMode() {
  var mobile = window.matchMedia('(min-width: 0px) and (max-width: 1200px)');
  var desktop = window.matchMedia('(min-width: 1201px)');

  if (mobile.matches) {
    if (!init) {
      init = true;
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
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      });
    }
  } else if (desktop.matches) {
    swiper.destroy();
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
    this.classList.toggle('faq__accordion-content--active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

/* Slider Testimonials */




// Modals And Forms

var callBackLink = document.querySelector('.header__callback');
var modalCallback = document.querySelector('.modals--callback');
var modalSent = document.querySelector('.modals--sent');
var modalCloseBtn = document.querySelectorAll('.modals__close-btn');
var displayNoneClass = 'modals--hide';
var inputName = document.querySelector('.modals__input-name');
var body = document.querySelector('body');

var toGoPhoneNumber = document.querySelector('#to-go__phone-number');
var toGoBtnSubmit = document.querySelector('.to-go__btn-submit');

var ctaPhoneNumber = document.querySelector('#call-to-action__phone-number');
var ctaNameValue = document.querySelector('#call-to-action__name');
var ctaBtnSubmit = document.querySelector('.call-to-action__btn-submit');

var modalPhoneNumber = document.querySelector('#modals__phone-number');
var modalNameValue = document.querySelector('#modals__name');
var modalBtnSubmit = document.querySelector('.modals__btn-submit');

var modalDoneBtn = document.querySelectorAll('.modals__done-btn');

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

var toGoPhoneNumberMask = IMask(toGoPhoneNumber, maskOptions);
var ctaPhoneNumberMask = IMask(ctaPhoneNumber, maskOptions);
var modalPhoneNumberMask = IMask(modalPhoneNumber, maskOptions);


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

function existVerticalScroll() {
  return document.body.offsetHeight > window.innerHeight;
}

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body &&
    document.body.scrollTop);
}

function enableScroll() {
  if (existVerticalScroll()) {
    body.classList.remove('body-lock')
    window.scrollTo(0, body.dataset.scrollY)
  }
}

function modalOpening(btn, modal, className) {

  body.dataset.scrollY = getBodyScrollTop();

  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove(className);

    inputName.focus();

    if (existVerticalScroll()) {
      body.classList.add('body-lock')
      body.style.top = `-${body.dataset.scrollY}px`;
    }

  });
}

function modalClosing(btn, modal, className) {

  for (var i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add(className);
      enableScroll();
    });
  }

  window.addEventListener('click', function (evt) {
    if (evt.target == modal) {
      modal.classList.add(className);
      enableScroll();
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (!modal.classList.contains(className)) {
        modal.classList.add(className);
        enableScroll();
      }
    }
  });
}


function displaySentSuccessfull(btn, modal, phoneElem, phoneKey, nameElem, nameKey) {
  body.dataset.scrollY = getBodyScrollTop();

  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
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

    if (existVerticalScroll()) {
      body.classList.add('body-lock')
      body.style.top = -body.dataset.scrollY + 'px';
    }
  });
}

modalOpening(callBackLink, modalCallback, displayNoneClass);
modalClosing(modalCloseBtn, modalCallback, displayNoneClass);

modalClosing(modalCloseBtn, modalSent, displayNoneClass);
modalClosing(modalDoneBtn, modalSent, displayNoneClass);

displaySentSuccessfull(toGoBtnSubmit, modalSent, toGoPhoneNumber, 'toGoPhone', ctaNameValue, 'toGoName');
displaySentSuccessfull(ctaBtnSubmit, modalSent, ctaPhoneNumber, 'ctaPhone', ctaNameValue, 'ctaName');
displaySentSuccessfull(modalBtnSubmit, modalSent, modalPhoneNumber, 'modalPhone', modalNameValue, 'modalName');
