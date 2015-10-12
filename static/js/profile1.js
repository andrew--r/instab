$(document).ready(function() {
  var Profile1 = {};

  

  Profile1.tags = function() {
    var $select = $('select.tag-list-select');
    var $list = $('.tag-list');
    var template = '<li class="tag-list__item tag"></li>';

    var reinitSelect = function() {
      $('select.tag-list-select').selectOrDie({
        placeholderOption: true,
        size: 4,

        onChange: function() {
          handleTagSelect();
        }
      });
    }

    var handleTagSelect = function() {
      var $selected = $select.find('option:selected');
      var topic = $selected[0].innerText.toLowerCase();
      var $listItem = $(template);

      $listItem[0].innerText = '#' + topic;

      $list.append($listItem);

      $select.find('option:selected').remove();
      $select.find('option:first-child').attr('selected', 'selected')
      $select.selectOrDie("destroy");
      reinitSelect();
    };

    var handleTagRemove = function() {
      var topic = capitalize($(this).text().substr(1));
      $select.append($('<option value="">' + topic + '</option>'));
      $(this).remove();
      $select.selectOrDie('destroy');
      reinitSelect();
      console.log(topic);
    };

    reinitSelect();
    $('body').on('click', '.tag-list__item', handleTagRemove);
  };

  Profile1.init = function() {
    general.svg();
    general.menu();
    general.selects();
    this.tags();
  }

  Profile1.init();

  // helpers
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
});