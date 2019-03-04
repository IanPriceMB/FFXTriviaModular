//This file contains the all scritps related to the question menu

import {pubsub} from'./pubsub';
import {state} from './state';
const questionMenu = (function() {
 
  //Cache DOM
  const $container = $(`.container`);

  //Bind Events
  $container.on('click', '.answer', playerChoice);

  //Event Listeners
  pubsub.subscribe('levelImageLoaded', componentDidMount);
  pubsub.subscribe('outOfTime', componentDidMount);
  pubsub.subscribe('nextQuestion', componentDidMount);

  function componentDidMount(){
    const data = state.getState();
    const level = data.levelTracker;

    if(Questions[level].length == data.questionTracker){
      pubsub.transmit('mainMenu', 'mainScreen');
    } else {
      render(data.levelTracker, data.questionTracker);
    }
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

  function playerChoice(){
    const data = state.getState();
    const level = data.levelTracker;
    const answer = $(this).attr('data-value');

    state.updateQeustionTracker('answered');
    state.updateLevel(level, answer);

    if(answer == 1){   
      pubsub.transmit('nextQuestion');
    } else {
      displayAnswers(level, data);
    }
  };

  function displayAnswers(){
    pubsub.transmit('nextQuestion');
  };

})();