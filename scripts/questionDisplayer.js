//Displays the proper question

const questionDisplayer = (function() {

  let questionTracker = 0;

  //Cache DOM
  const $container = $(`.container`);

  //Bind Events

  //Event Listeners
  pubsub.subscribe('levelStart', render);

  function render(level){
    $container.empty();
    for (let i = 0; i < Questions[level][questionTracker].answers.length; i++){    
      const answer = $("<div class='answer'>");
      answer.attr("id", i);
      answer.attr("data-value", Questions[level][questionTracker].answers[i].value);
      $container.append(answer);     
      const answerID = $(`<span class='answerID'>${i}</span>`);
      const answerText = $(`<span class='answer'>${Questions[level][questionTracker].answers[i].a}</span>`);
      answer.append(answerID, answerText);
  }
  };

  function selection(){

  };

  function displayAnswers(){

  };


})();