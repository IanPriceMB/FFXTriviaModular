//This file dynamically changes the background
import {pubsub} from'./pubsub';
import {state} from './state';
const backgroundSelector = (function() {
  
  //Event Listeners
  pubsub.subscribe('mainMenu', changeBackground);
  pubsub.subscribe('levelStart', changeBackground);

  //Cache DOM
  const $body = $('body');

  function changeBackground(){

    const data = state.getState();
    const src = data.levelTracker; 

    const $img = $('#background');
    $img.remove();

    if(src == 'mainMenu' || null){
      $body.append(`<img #='background' src="assets/backgrounds/${src}.png" async defer onload="pubsub.transmit('imageLoaded', ${src})" />`);
    } else {
      $body.append(`<img #='background' src="assets/backgrounds/${src}.png" async defer onload="pubsub.transmit('levelImageLoaded', ${src})" />`);
    }
  };

})();
//Revisit this if there is still loading times and try use set interval 