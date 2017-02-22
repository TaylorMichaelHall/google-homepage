/*$(document).ready(function(){
  $('#icon').hover(function(){
    $(this).fadeTo('slow', 0.5);
      $(this).hide();
  });
}); */


$(document).ready(function(){
  $('#icon').fadeTo('fast', 0.5);
  $('#icon').hover(function() {
      $(this).fadeTo('fast', 1);
    }, function() {
      $(this).fadeTo('fast', 0.5);
    }
  );
});
