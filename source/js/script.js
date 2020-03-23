'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });


/* Programms Tabs */
function openProgramm(evt, progName) {
  var i;
  var tabcontent;
  var tablinks;
  tabcontent = document.querySelectorAll('.programms__tabs-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.querySelectorAll('.programms__tabs-btn');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' programms__tabs-btn--active', '');
  }
  document.getElementById(progName).style.display = 'block';
  evt.currentTarget.className += ' programms__tabs-btn--active';
}

document.getElementById('defaultOpen').click();
/* Programms Tabs END*/

// var swiper = new Swiper(".swiper-container", {
//   pagination: {
//     el: ".swiper-pagination"
//   },
//   loop: true,
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,

//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     767: {
//       slidesPerView: 5
//     }
//   }
// });


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
