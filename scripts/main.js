$(document).ready(() => {
  const $header = $("header");
  const $sticky = $header.before($header.clone().addClass("sticky"));
  const toggle_Scroll_Class_On_Body = () => {
    //create a variable that returns the scroll position of the user
    let scrollPosition = $(window).scrollTop();
    //toggle "scroll" class to body if scroll position is greater than 350
    $("body").toggleClass("scroll", scrollPosition > 350);
  };
  const check_if_in_view = () => {
    let window_height = $(window).height();
    let window_top_position = $(window).scrollTop();
    let window_bottom_position = window_height + window_top_position;

    let $animationDiv = $(".animation");
    let animationDiv_height = $animationDiv.outerHeight();
    let animationDiv_top_position = $animationDiv.offset().top;
    let animationDiv_bottom_position =
      animationDiv_top_position + animationDiv_height;

    if (
      animationDiv_bottom_position >= window_top_position &&
      animationDiv_top_position <= window_bottom_position
    ) {
      $animationDiv.addClass("in-view");
    } else {
      $animationDiv.removeClass("in-view");
    }
  };

  //create an on event that targets when the user scrolls
  $(window).on("scroll", toggle_Scroll_Class_On_Body);
  //create an on event that targets specific div when user scrolls
  $(window).on("scroll", check_if_in_view);

  $('.menu li a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    let target = $(this.hash);

    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 80
          },
          800
        );
    }
    if (target.selector == "#contact") {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 40
          },
          800
        );
    }
  });

  //slider
  const body = $("body");
  const menuTrigger = $(".js-menutrigger");
  const mainOverlay = $(".js_mainoverlay");

  menuTrigger.on("click", () => {
    body.addClass("menu-is-active");
    $(".menu li a").addClass("animated pulse infinite");
  });

  $(".menu li a").on("click", () => {
    $("body").removeClass("menu-is-active");
    $(".menu li a").removeClass("animated pulse infinite");
  });

  $(mainOverlay).on("click", () => {
    $("body").removeClass("menu-is-active");
    $(".menu li a").removeClass("animated pulse infinite");
  });

  //masonry
  $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
    fitWidth: true,
    gutter: 2
  });
});
