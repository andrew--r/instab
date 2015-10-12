$(document).ready(function() {

  var general = {
    svg: function() {
      svg4everybody();
    },

    selects: function() {
      $('.customselect').selectOrDie();
    },

    menu: function() {
      this.menuStatus = 'closed';

      var menuHandler = function(e) {
        e.preventDefault();

        if (this.menuStatus == 'closed') {
          $('.header__expand').addClass('header__expand--close');
          $('.header__additional').slideDown(400, function() {
            $(this).css('display', 'flex');
          });
          this.menuStatus = 'opened';
        } else if (this.menuStatus == 'opened') {
          $('.header__expand').removeClass('header__expand--close');
          $('.header__additional').slideUp(400);
          this.menuStatus = 'closed';
        }
      };

      var resizeHandler = function() {
        if ($(window).innerWidth() > 1140 && this.menuStatus == 'closed') {
          $('.header__additional').attr('style', '');
        }
      };

      $('.header__expand').click(menuHandler.bind(this));
      $(window).resize(resizeHandler.bind(this));
    }
  };


  window.general = general;
});