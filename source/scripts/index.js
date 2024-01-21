
// (function () {
//   const TABLET_WIDTH = 768;
//   const DESKTOP_WIDTH = 1300;
//   const slider = document.querySelector('.slider');
//   const scale = slider.querySelector('.slider__scale');
//   const grip = scale.querySelector('.slider__grip');
//   const before = slider.querySelector('.slider__image--before');
//   const after = slider.querySelector('.slider__image--after');
//   let scaleWidth;
//   let halfGripWidth;
//   let gripWidth;

//   const getElemWidth = function (elem) {
//     return parseInt(getComputedStyle(elem).width, 10);
//   };


//   const getCoords = function (elem) {
//     const box = elem.getBoundingClientRect();
//     console.log(box, elem)
//     return box.left + pageXOffset;
//   };

//   const gripDownHandler = function (evtDown) {
//     const gripCoords = getCoords(grip);
//     const scaleCoords = getCoords(scale);
//     grip.classList.add('is_active')
//     // grip.style.transition = 'none';

//     // console.log(gripCoords, scaleCoords)

//     const shiftX = evtDown.pageX - gripCoords;

//     document.onmousemove = function (evtMove) {
//       let newLeft = evtMove.pageX - shiftX - scaleCoords;

//       if (newLeft < 0) {
//         newLeft = 0;
//       }

//         let rightEdge = scaleWidth - gripWidth;
//         if (newLeft > rightEdge) {
//           newLeft = rightEdge;
//         }

//         let gripValue = newLeft / rightEdge * 100;
//         grip.style.marginLeft = newLeft + 'px';

//         before.style.width = (gripValue) + '%' ;
//         after.style.width = (100 - gripValue) + '%';

//         console.log(gripValue)

//       };

//       document.onmouseup = function () {
//         document.onmousemove = document.onmouseup = null;
//         grip.classList.remove('is_active');

//       };

//       return false;
//     };

//     let addGripHandlers = function () {
//       grip.addEventListener('mousedown', gripDownHandler);
//     };

//     let removeGripHandlers = function () {
//       grip.removeEventListener('mousedown', gripDownHandler);
//     };


//   let initialize = function() {
//     let viewport = document.documentElement.clientWidth || window.innerWidth;

//     if (viewport >= TABLET_WIDTH) {
//       addGripHandlers();
//     } else {
//       removeGripHandlers();
//     }

//     sliderWidth = getElemWidth(slider);
//     scaleWidth = getElemWidth(scale);
//     gripWidth = getElemWidth(grip);
//     halfGripWidth = sliderWidth / gripWidth/2

//     before.style.width = '';
//     after.style.width = '';
//     grip.style.marginLeft = '';
//   };

//   window.addEventListener('load', initialize);
//   window.addEventListener('resize', initialize);
// })();
