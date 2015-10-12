$(document).ready(function() {
  var Profile4 = {};

  Profile4.textarea = function() {
    var highlight = function(text) {
      var tagExpression = /(\#[^\ ]*)/gm;
      var usernameExpression = /(\@[^\ ]*)/gm;

      var highlightedText = text.replace(tagExpression, '<mark>$1</mark>')
                                .replace(usernameExpression, '<mark>$1</mark>');
      
      return highlightedText;
    };

    $('.application__textarea').each(function() {
      $(this).html(highlight($(this).html()));
    });
  };

  Profile4.resize = function() {
    $(window).resize(function() {
      if ($(this).innerWidth() < 480) {
        $('.upload').css('height', $('.upload').width());
      }
    });

    if ($(window).innerWidth() < 480) {
        $('.upload').css('height', $('.upload').width());
      }
  };

  Profile4.init = function() {
    general.svg();
    general.menu();
    general.selects();
    this.textarea();
    this.resize();
  }

  Profile4.init();
});