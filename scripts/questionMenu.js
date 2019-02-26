//This file contains the all scritps related to the question menu

// store = require("./reduxState/store");
// answerQuestion = require("./reduxState/actions/answerQeustion");

const questionMenu = (function() {
 
  //Cache DOM
  const $container = $(`.container`);

  //Bind Events
  $container.on('click', '.answer', answerSelection);

  //Event Listeners
  pubsub.subscribe('levelStart', getState);
  pubsub.subscribe('outOfTime', getState);
  pubsub.subscribe('nextQuestion', getState);

  function getState(){
    const data = state.getState();
    render(data.levelTracker, data.questionTracker)
  }

  function render(level, questionTracker){
    $container.empty();
    $container.append(`<div class='question'>${Questions[level][questionTracker].question}`);

    for (let i = 0; i < Questions[level][questionTracker].answers.length; i++){    
      const answer = $("<div class='answer'>");
      answer.attr("data-value", Questions[level][questionTracker].answers[i].value);
      $container.append(answer);     
      const answerID = $(`<span>${i}</span>`);
      const answerText = $(`<span>${Questions[level][questionTracker].answers[i].a}</span>`);
      answer.append(answerID, answerText);
  }
  };

  function answerSelection(){
    const data = state.getState();
    const level = data.levelTracker;
    const dataValue = $(this).attr('data-value');

    state.updateQeustionTracker('nextQuestion');

    if(dataValue == 1){
      state.updateLevel(level, dataValue);
      pubsub.transmit('nextQuestion');
    } else {
      state.updateLevel(level, dataValue);
      displayAnswers(level);
    }
  };

  function displayAnswers(){
    pubsub.transmit('nextQuestion');
  };


})();