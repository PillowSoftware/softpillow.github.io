'use strict';



var tl = new TimelineMax();
var animationInitiated = false;

function initServerStackAnimation() {
  TweenMax.set('svg', {
    visibility: 'visible'
  });
  animationInitiated = true;
  tl.from('#Infrastructure-shadow', 0.15, {
    scale: 0,
    delay: 0.15,
    transformOrigin: 'center center',
    ease: Elastic.easeOut.config(1.5, 1)
  }, 'boxes-in').staggerFrom('.Server', 0.75, {
    scale: 0,
    transformOrigin: 'center center',
    ease: Elastic.easeOut.config(1.5, 1)
  }, -0.15, 'boxes-in').from('#Server_1', 0.25, {
    y: '45'
  }, 'boxes').from('#Server_3', 0.25, {
    y: '-45'
  }, 'boxes').from('#Server_4', 0.25, {
    y: '-90'
  }, 'boxes').from('#Infrastructure-shadow', 0.25, {
    y: '-90'
  }, 'boxes').from('.Infrastructure-lines', 0.5, {
    opacity: 0
  })
    // Replay button
    .from('.replay', 0.25, {
      scale: 0
    });

}

function addInterval() {
  setInterval(function () { 
    tl.restart();
  }, 15000);
}
// document.querySelector('.replay').addEventListener('click', function (e) {
//   e.preventDefault();

//   tl.restart();
// });

$(window).scroll(function () {
  if (!animationInitiated) {
    var hT = $('#server_stack_section').offset().top,
      hH = $('#server_stack_section').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
      initServerStackAnimation();
      addInterval();
    }
  }
});