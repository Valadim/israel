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
