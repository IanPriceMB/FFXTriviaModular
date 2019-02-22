//Controls the UI flow

const gameMenu = (function(){

  const levelNames = ["Besaid", "Luca", "Djose", "Thunder Plains", "Gagazet"];
  const levelDifficulty = ["very easy", "easy", "medium", "advanced", "expert"];

  //Cache DOM
  const $body = $(`body`);
  const $container = $(`.container`);
  
  //Bind Events
  pubsub.subscribe('imageLoaded', render);

  function render(screen){
    $($container).empty();
    for(let i = 0; i < levelNames.length; i++) {
      const levelButton = $("<div class='level-button'>");
      $($container).append(levelButton);
      $(levelButton).append("<h2>" + levelNames[i] + "</h2><p>" + levelDifficulty[i] + "</p>")
    }
  }

  $($body).on('click', '.level-button', function(){
    const level = this.firstChild.textContent.replace(/ /g, '');
    pubsub.transmit('levelStart', level);
  })
  function levelStart() {
    
  }
})();