//Controls the UI flow

const gameMenu = (function(){

  const levelNames = ["Besaid", "Luca", "Djose", "Thunder Plains", "Gagazet"];
  const levelDifficulty = ["very easy", "easy", "medium", "advanced", "expert"];

  //Cache DOM
  const $body = $(`body`);
  const $container = $(`.container`);
  
  //Bind Events
  pubsub.subscribe('mainMenu', render);

  function render(screen){
    //From the 'wait for images' npm package
    // $($body).waitForImages().done(function() {

      $($container).empty();
      
      for(let i = 0; i < levelNames.length; i++) {
        const levelButton = $("<div class='level-button'>");
        $($container).append(levelButton);
        $(levelButton).append("<h2>" + levelNames[i] + "</h2><p>" + levelDifficulty[i] + "</p>")
      }

    // });

  }

})();