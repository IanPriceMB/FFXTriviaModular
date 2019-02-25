//Displays the proper question

const questionDisplayer = (function() {

  let questionTracker = 0;
 
  //Cache DOM
  const $container = $(`.container`);

  //Bind Events
  $container.on('click', '.answer', answerSelection);

  //Event Listeners
  pubsub.subscribe('levelStart', render);

  function render(level){
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
      render(level);
    } else {
      displayAnswers();
    }
  };

  function displayAnswers(){
    console.log('woot');
  };


})();