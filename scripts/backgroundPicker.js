//Changes the background
const backgroundPicker = (function() {

  //Bind events

  //Event Listeners
  pubsub.subscribe('mainMenu', changeBackground);
  pubsub.subscribe('levelStart', changeBackground);

  async function changeBackground(screen){
    const a = await newSrc(screen);
    if(a){
      pubsub.transmit('imageLoaded', screen);
    }
  }

  async function newSrc (src){
    const $img = $('#background');
    $img.attr('src', `assets/backgrounds/${src}.png`);
    return true
  }
})();
//Revisit this if there is still loading times and try use set interval 