import {pubsub} from'./pubsub';
import {state} from './state';

$(document).ready(function() {
  var $button = $('.container>button');

  $button.on("click", function(event){
    event.preventDefault();
    state.updateLevelTracker(`mainScreen`);
    pubsub.transmit(`mainMenu`);
  });

});

