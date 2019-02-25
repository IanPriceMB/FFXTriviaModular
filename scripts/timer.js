//countdown timer for questions

timer = (function(){

  //Cache DOM
  $container = $('.container');

  //Bind Events

  //Event Listeners
  pubsub.subscribe('levelStart', start);
  pubsub.subscribe('nextQuestion', start);

  function start() {

  };

  function stop(){

  }

  function tick(){

  }


})();