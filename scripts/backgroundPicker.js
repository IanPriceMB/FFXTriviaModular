//Changes the background
const backgroundPicker = (function() {

  //Bind events
  pubsub.subscribe('mainMenu', changeBackground);
  pubsub.subscribe('levelStart', changeBackground);

  async function changeBackground(screen){
    const a = await newSrc(screen);

    if(a){
      pubsub.transmit('imageLoaded', screen)
    }
  }

  async function newSrc (screen){
    const $img = $('#background');
    $img.attr('src', `assets/backgrounds/${screen}.png`);

    return true
  }
})();
//Revisit this if there is still loading times and try use set interval 