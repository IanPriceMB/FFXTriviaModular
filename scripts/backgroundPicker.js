// Changes the background
const backgroundPicker = (function(){

  // Cache Dom
  const $body = $(`body`);

  // Bind events
  pubsub.subscribe('screenChange', changeBackground);

  function changeBackground(screen) {
    $($body).css("background", `url(assets/backgrounds/${screen}.png) center center / 100% 100% no-repeat`);
  }
})();