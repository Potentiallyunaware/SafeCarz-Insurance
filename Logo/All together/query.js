$(document).ready(function () {
  $(".logo").on({
    mouseenter: function () {
      $(".caliper").css("transform", "scale(1)");
      $('.disc').css('animation-play-state','paused')
    //   $('.disc').css('animation-duration','19s')
    },
    mouseleave: function () {
        $(".caliper").css("transform", "scale(1.1)");
        $('.disc').css('animation-play-state','running')
        // $('.disc').css('animation-duration','6s')
    },
  });
});
