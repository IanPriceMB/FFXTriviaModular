//countdown timer for questions

const timer = (function(){

  let time;
  let intervalID;

  //Cache DOM
  $container = $('.container');

  //Bind Events

  //Event Listeners
  pubsub.subscribe('levelStart', runTimer);
  pubsub.subscribe('nextQuestion', runTimer);

  function runTimer() {
    time = 20;
    clearInterval(intervalID);
    intervalID = setInterval(tick, 1000);
  };

  function stop(){
    clearInterval(intervalID);
  };

  function tick(){
    time--;
    if (time == 0) {
      stop();
      pubsub.transmit('outOfTime');
    } else {
      pubsub.transmit('tick', time);
    }
  };
})();