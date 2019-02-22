$(document).ready(function() {
  const $button = $('.container>button');

  $($button).on("click", function(event){
    event.preventDefault();
    pubsub.transmit(`screenChange`, `Besaid`);
  });

});

