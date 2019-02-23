//Changes the background
const backgroundPicker = (function() {

  //Cache DOM
  const $img = $('img');

  //Bind events
  pubsub.subscribe('mainMenu', changeBackground);
  pubsub.subscribe('levelStart', changeBackground);

  function changeBackground(screen) {
    $img.attr('src', `assets/backgrounds/${screen}.png`);
    $img.on('load', function() {
      pubsub.transmit('imageLoaded', screen);
    });
  };
})();