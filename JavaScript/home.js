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

  // FAQs
    $('.q1').click(function(){
      $('.v1').fadeToggle();
      $('.a1').slideToggle(200);
      $('.v2, .v3, .v4, .v5, .v6').fadeIn();
      $('.a2, .a3, .a4, .a5, .a6').slideUp(200);
    })
    $('.q2').click(function(){
      $('.v2').fadeToggle();
      $('.a2').slideToggle(200);
      $('.v1, .v3, .v4, .v5, .v6').fadeIn();
      $('.a1, .a3, .a4, .a5, .a6').slideUp(200);
    })
    $('.q3').click(function(){
      $('.v3').fadeToggle();
      $('.a3').slideToggle(200);
      $('.v2, .v1, .v4, .v5, .v6').fadeIn();
      $('.a2, .a1, .a4, .a5, .a6').slideUp(200);
    })
    $('.q4').click(function(){
      $('.v4').fadeToggle();
      $('.a4').slideToggle(200);
      $('.v2, .v3, .v1, .v5, .v6').fadeIn();
      $('.a2, .a3, .a1, .a5, .a6').slideUp(200);
    })
    $('.q5').click(function(){
      $('.v5').fadeToggle();
      $('.a5').slideToggle(200);
      $('.v2, .v3, .v4, .v1, .v6').fadeIn();
      $('.a2, .a3, .a4, .a1, .a6').slideUp(200);
    })
    $('.q6').click(function(){
      $('.v6').fadeToggle();
      $('.a6').slideToggle(200);
      $('.v2, .v3, .v4, .v5, .v1').fadeIn();
      $('.a2, .a3, .a4, .a5, .a1').slideUp(200);
    })
});

  // ScrolltoTop Button
let mybutton = document.getElementById('myBtn');
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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