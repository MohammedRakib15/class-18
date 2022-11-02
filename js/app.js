 $(function () {
     $(window).on('scroll', function () {
         var kamal = $(window).scrollTop();
         if (kamal > 65) {
             $('#nav').addClass('active');
         } else {
             $('#nav').removeClass('active');
         }
     });
    //  $(window).on('load', function () {
    //      $('#preloader').hide(1000);
    //  });
 })