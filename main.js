$(document).ready(function() {

  $('#addSnoop').click(function() {
    var posX = Math.floor(Math.random()*100) + '%';
    var posY = Math.floor(Math.random()*100) + '%';
    var snoop = `<img class="snoop mt-1" src="./images/snoop.gif" style="left: ${posX}; top: ${posY}">`;
    $('body').append(snoop);
  });

  $('#removeSnoops').click(function() {
    $('.snoop').remove();
  });
  
});