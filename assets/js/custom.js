$(document).ready(function () {

  setTimeout(() => {

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#sideNav'
    });

    $('[data-toggle="tooltip"]').tooltip();


    // $('.navbar-nav > li > a').on('click', (e) => {
    //   console.log('aa');
    //   if (window?.innerWidth <= 991.98 && !e?.currentTarget?.classList?.contains('dropdown-toggle'))
    //     $('.navbar-collapse').collapse('hide');

    // });


  }, 100)


});
