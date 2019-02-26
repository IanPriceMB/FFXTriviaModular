//This file dynamically changes the background

const backgroundSelector = (function() {
  
  //Event Listeners
  pubsub.subscribe('mainMenu', changeBackground);
  pubsub.subscribe('levelStart', getState);

  function getState() {
    const data = state.getState();

    changeBackground(data.levelTracker)
  }

  async function changeBackground(screen){
    const a = await newSrc(screen);
    if(a){
      pubsub.transmit('imageLoaded', screen);
    }
  };

  async function newSrc (src){
    const $img = $('#background');
    $img.attr('src', `assets/backgrounds/${src}.png`);
    return true
  };

})();
//Revisit this if there is still loading times and try use set interval 