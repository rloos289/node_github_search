var Search = require('./../js/search.js').SearchModule;
var apiKey = require('./../.env').apiKey;
var Api = require('./../js/search.js').getRepos;


//<!-- Back End -->

$(document).ready(function(){
  var search = new Search();
  $('#search').submit(function(event) {
    event.preventDefault();
    $('#name').text("");
    var username = $('#search_input').val();
    $('#search_input').val("");
    search.getRepos(username);
    search.getInfo(username);
    setTimeout(function() {
      $('.project').click(function(event) {
      event.preventDefault();
      $('.info',this).toggle('.hide');
      });
    }, 1000);
  });

});
