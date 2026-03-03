$(document).ready(function () {
  // NAV BAR - LOGO
  $('.logo').on({
    mouseenter: function () {
      $('.discs').css({
        'animation-play-state': 'running',
        'animation-name': 'rotate',
      });
      $('.caliper').css('transform', 'scale(1.1)');
    },
    mouseleave: function () {
      $('.discs').css('animation-play-state', 'paused');
      $('.caliper').css('transform', 'scale(1)');
    },
  });


  // TO SHOW AVAILABLE PLANS
  $('.model').click(function () {
    $('.available-plans').css('display', 'none');
    $('.plans').css('display', 'flex');
  });

  $('.backclick').click(function () {
    $('.available-plans').css('display', 'flex');
    $('.plans').css('display', 'none');
    $('.e1').slideUp();
    $('.e2').slideUp();
    $('.details').slideUp();
    $('.b1').css('display', 'flex');
    $('.b2').css('display', 'flex');
    $('.lb1').css('display', 'none');
    $('.lb2').css('display', 'none');
  });

  // TO SHOW DETAILS
  $('.b1').click(function () {
    $(this).css('display', 'none');
    $('.lb1').css('display', 'flex');
    $('.first-details').slideDown('slow');
    $('.second-details, .third-details').slideUp('slow');
    $('.first-details').css('display', 'flex');
  });
  $('.lb1').click(function () {
    $(this).css('display', 'none');
    $('.tpl, .uic').css({ 'display': 'flex' });
    $('.first-details').slideUp('slow');
    $('.first-details').css('display', 'flex');
    $('.b1').css('display', 'flex');
  });
  $('.b2').click(function () {
    $(this).css('display', 'none');
    $('.lb2').css('display', 'flex');
    $('.jubilee').css('display', 'none');
    $('.second-details').slideDown('slow');
    $('.first-details, .third-details').slideUp('slow');
    $('.second-details').css('display', 'flex');
  });
  $('.lb2').click(function () {
    $(this).css('display', 'none');
    $('.jubilee, .uic').css({ 'display': 'flex' });
    $('.second-details').slideUp('slow');
    $('.second-details').css('display', 'flex');
    $('.b2').css('display', 'flex');
  });
  $('.b3').click(function () {
    $(this).css('display', 'none');
    $('.lb3').css('display', 'flex');
    $('.jubilee, .tpl').css('display', 'none');
    $('.third-details').slideDown('slow');
    $('.first-details, .second-details').slideUp('slow');
    $('.third-details').css('display', 'flex');
  });
  $('.lb3').click(function () {
    $(this).css('display', 'none');
    $('.tpl, .jubilee').css({ 'display': 'flex' });
    $('.third-details').slideUp('slow');
    $('.third-details').css('display', 'flex');
    $('.b3').css('display', 'flex');
  });

  // TO ENQUIRY
  $('.enq1').click(function () {
    $('input').val('');
    $('.e1').slideToggle();
    $('.e2').slideUp();
    $('.e3').slideUp();
    $('.b1').css('display', 'flex');
    $('.b2').css('display', 'flex');
    $('.b3').css('display', 'flex');
    $('.lb1').css('display', 'none');
    $('.lb2').css('display', 'none');
    $('.lb3').css('display', 'none');
    $('.first-details').slideUp();
    $('.second-details').slideUp();
    $('.third-details').slideUp();
  });
  $('.enq2').click(function () {
    $('input').val('');
    $('.e2').slideToggle();
    $('.e1').slideUp();
    $('.e3').slideUp();
    $('.b1').css('display', 'flex');
    $('.b2').css('display', 'flex');
    $('.b3').css('display', 'flex');
    $('.lb1').css('display', 'none');
    $('.lb2').css('display', 'none');
    $('.lb3').css('display', 'none');
    $('.first-details').slideUp();
    $('.second-details').slideUp();
    $('.third-details').slideUp();
  });
  $('.enq3').click(function () {
    $('input').val('');
    $('.e3').slideToggle();
    $('.e1').slideUp();
    $('.e2').slideUp();
    $('.b1').css('display', 'flex');
    $('.b2').css('display', 'flex');
    $('.b3').css('display', 'flex');
    $('.lb1').css('display', 'none');
    $('.lb2').css('display', 'none');
    $('.lb3').css('display', 'none');
    $('.first-details').slideUp();
    $('.second-details').slideUp();
    $('.third-details').slideUp();
  });
  $('.submit').click(function () {
    $('input').val('');
  });
  $('.topper').click(function () {
    $('.e1').slideUp();
    $('.e2').slideUp();
    $('.e3').slideUp();
    $('.first-details').slideUp();
    $('.second-details').slideUp();
    $('.third-details').slideUp();
    $('.b1').css('display','flex');
    $('.b2').css('display','flex');
    $('.b3').css('display','flex');
    $('.lb1').css('display','none');
    $('.lb2').css('display','none');
    $('.lb3').css('display','none');
  });
  $('.submit').on({
    mousedown: function () {
      $(this).css('background', '#9191e4');
    },
    mouseup: function () {
      $(this).css('background', '#3a3dda');
    },
    mouseenter: function () {
      $(this).css('background', '#5254d8')
      $(this).css('color', 'white')
    },
    mouseleave: function () {
      $(this).css('background', 'white')
      $(this).css('color', '#3a3dda')
    },
  });
});
