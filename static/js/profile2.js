$(document).ready(function() {
  var Profile2 = {};

  Profile2.textarea = function() {
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

  Profile2.init = function() {
    general.svg();
    general.menu();
    general.selects();
    this.textarea();
  }

  Profile2.init();
});