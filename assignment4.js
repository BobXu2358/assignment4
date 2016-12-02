// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
})();

//keyup events in input field
$('.flexsearch-input').keyup(function(){
  $('.result').empty();
  var key = $('.flexsearch-input').val().toLowerCase();
  if(key.length > 0) {
    $.ajax({
      url: "http://www.mattbowytz.com/simple_api.json?data=all",
      method: 'GET'
    }).success(function (data) {
      console.log(data);
      $.each(data.data, function (index, element) {
        $.each(element, function (subIndex, subElement) {
          if (subElement.substring(0, key.length).toLowerCase() == key) {
            console.log(subElement);
            $('.result').append('<li class="sugguestion"><a href="http://www.google.com/search?q=' + subElement + '">' + subElement + '</a></li>');
          }
        })
      });
    }).fail(function (data) {
      console.log(data);
    });
  }
  });