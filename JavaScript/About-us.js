$(document).ready(function () {
  // NAVBAR - LOGO
  $('.logo').on({
    mouseenter: function () {
      $('.discs').css({'animation-play-state':'running', 'animation-name':'rotate'});
      $('.caliper').css('transform', 'scale(1.1)');
    },
    mouseleave: function () {
      $('.discs').css('animation-play-state', 'paused');
      $('.caliper').css('transform', 'scale(1)');
    },
  });

});
// ScrolltoTop Button
let mybutton = document.getElementById('myBtn');
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    // mybutton.style.display = 'block';
    mybutton.style.bottom = '20px';
  } else {
    // mybutton.style.display = 'none';
    mybutton.style.bottom = '-80px';
  }
}
function topper() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
})
}
