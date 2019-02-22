//Changes the background
const backgroundPicker = (function(){

  //Cache DOM
  const $body = $(`body`);

  //Bind events
  pubsub.subscribe('mainMenu', changeBackground);
  pubsub.subscribe('levelStart', changeBackground);

  function changeBackground(screen) {
    console.log('here')
    $($body).css("background", `url(assets/backgrounds/${screen}.png) center center / 100% 100% no-repeat`);
  }
})();