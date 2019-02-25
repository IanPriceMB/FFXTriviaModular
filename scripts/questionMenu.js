//This file contains the all scritps related to the question menu

store = require("./reduxState/store");
answerQuestion = require("./reduxState/actions/answerQeustion");

const questionMenu = (function() {

  let questionTracker = 0;
 
  //Cache DOM
  const $container = $(`.container`);

  //Bind Events
  $container.on('click', '.answer', answerSelection);

  //Event Listeners
  pubsub.subscribe('levelStart', render);
  pubsub.subscribe('outOfTime', render);

  function render(level){
    console.log(Store.getState());
    $container.empty();
    $container.append(`<div class='question'>${Questions[level][questionTracker].question}`);
    for (let i = 0; i < Questions[level][questionTracker].answers.length; i++){    
      const answer = $("<div class='answer'>");
      answer.attr("id", i);
      answer.attr("data-value", Questions[level][questionTracker].answers[i].value);
      $container.append(answer);     
      const answerID = $(`<span class='ID'>${i}</span>`);
      const answerText = $(`<span class='text'>${Questions[level][questionTracker].answers[i].a}</span>`);
      answer.append(answerID, answerText);
  }
  };

  function answerSelection(level){
    questionTracker++;
    if($(this).attr('data-value') == 1){
      store.dispatch(answerQuestion(1, level))
      pubsub.transmit('nextQuestion');
      render('Besaid');
    } else {
      displayAnswers();
    }
  };

  function displayAnswers(){
    console.log('woot');
    render('Besaid');
    pubsub.transmit('nextQuestion');
  };


})();