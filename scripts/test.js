$(document).ready(function() {
  const $button = $('.container>button');

  $($button).on("click", function(event){
    console.log('here')
    event.preventDefault();
    pubsub.transmit(`mainMenu`, `mainScreen`);
  });

});

