// This file is a countdown timer

const timer = (function(){

  let time;
  let intervalID;

  //Cache DOM
  $container = $('.container');

  //Bind Events

  //Event Listeners
  pubsub.subscribe('levelStart', runTimer);
  pubsub.subscribe('nextQuestion', runTimer);

  function render(){
    $('.timer').remove();
    $container.prepend(`<div class='timer'>${time}</div>`);
  };

  function runTimer() {
    time = 20;

    //Added this render to counter act a weird visual delay bug
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
    if (time == 0) {
      stop();
      pubsub.transmit('outOfTime');
    } 
  };
})();