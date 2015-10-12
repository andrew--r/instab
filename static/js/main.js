$(document).ready(function() {
  var Main = {};


  Main.svg = function() {
    svg4everybody();
  };


  Main.tabs = function() {
    pureTabs.init('hero__link', 'hero__link--active');
  };

  Main.grid = function() {
    var checkDesktops = function() {
      if ($(window).innerWidth() > 1180) {
        $('.popular__list .usercard--hidden').removeClass('usercard--hidden');
      }
    }
    var checkTablets = function() {
      if ($(window).innerWidth() <= 1180 && $(window).innerWidth() >= 790) {
        if ( $('.popular__list').children().length % 2 ) {
          $('.popular__list .usercard--hidden').removeClass('usercard--hidden');
          $('.popular__list .usercard:not(:first-child):nth-child(2n+1)').addClass('usercard--hidden');
        }
      }
    };

    var checkMobiles = function() {
      if ($(window).innerWidth() < 750) {
        $('.popular__list .usercard:not(:first-child)').addClass('usercard--hidden');
      }
    };

    checkDesktops();
    checkTablets();
    checkMobiles();

    $(window).resize(function() {
      checkDesktops()
      checkTablets();
      checkMobiles();
    });    
  };

  Main.init = function() {
    this.svg();
    this.tabs();
    this.grid();
  }

  Main.init();
});