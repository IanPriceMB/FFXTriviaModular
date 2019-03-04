// This file is a countdown timer
import {pubsub} from'./pubsub';
import {state} from './state';
const timer = (function(){

  let time;
  let intervalID;

  //Cache DOM
  $container = $('.container');

  //Event Listeners
  pubsub.subscribe('levelStart', runTimer);
  pubsub.subscribe('nextQuestion', runTimer);
  pubsub.subscribe('outOfTime', runTimer);

  function render(){
    $('.timer').remove();
    $container.prepend(`<div class='timer'>${time}</div>`);
  };

  function runTimer() {
    time = 20;

    render();

    clearInterval(intervalID);
    intervalID = setInterval(tick, 1000);
  };

  function stop(){
    clearInterval(intervalID);
  };

  function tick(){
    time--;
    render();
    if (time <= 0) {
      state.updateQeustionTracker('answered');
      pubsub.transmit('outOfTime');
      stop();
    } 
  };
})();