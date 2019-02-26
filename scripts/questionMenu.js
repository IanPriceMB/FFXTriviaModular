//This file contains the all scritps related to the question menu

// store = require("./reduxState/store");
// answerQuestion = require("./reduxState/actions/answerQeustion");

const questionMenu = (function() {
 
  //Cache DOM
  const $container = $(`.container`);

  //Bind Events
  $container.on('click', '.answer', playerChoice);

  //Event Listeners
  pubsub.subscribe('levelStart', componentDidMount);
  pubsub.subscribe('outOfTime', componentDidMount);
  pubsub.subscribe('nextQuestion', componentDidMount);

  function componentDidMount(){
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

  function playerChoice(){
    const data = state.getState();
    const level = data.levelTracker;
    const answer = $(this).attr('data-value');
    console.log(level)
    console.log(data.questionTracker)

    state.updateQeustionTracker('answered');

    if(answer == 1){
      state.updateLevel(level, answer);
      nextQuestion(level, data);
    } else {
      state.updateLevel(level, answer);
      displayAnswers(level, data);
    }
  };

  function displayAnswers(level, data){
    nextQuestion(level, data);
  };
  function nextQuestion(level, data){
    if(Questions[level].length == data.questionTracker){
      console.log('here')
      pubsub.transmit('mainMenu', 'mainScreen');
      
    } else {
      console.log('here')
      pubsub.transmit('nextQuestion');
    }
  
  }

})();