$(document).ready(function(){
  $('#icon').fadeTo('fast', 0.5);
  $('#icon').hover(function() {
      $(this).fadeTo('fast', 1);
    }, function() {
      $(this).fadeTo('fast', 0.5);
    }
  );
});
