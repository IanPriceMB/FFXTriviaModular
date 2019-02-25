//This file contains all the scripts for the main menu

const gameMenu = (function(){
  const levelNames = ["Besaid", "Luca", "Djose", "Thunder Plains", "Gagazet"];
  const levelDifficulty = ["very easy", "easy", "medium", "advanced", "expert"];

  //Cache DOM
  const $container = $(`.container`);
  
  //Bind Events
  $container.on('click', '.level-button', levelSelect);

  //Event Listeners
  pubsub.subscribe('mainMenu', render);

  function render(){
    $container.empty();
    for(let i = 0; i < levelNames.length; i++) {
      const levelButton = $("<div class='level-button'>");
      $container.append(levelButton);
      levelButton.append("<h2>" + levelNames[i] + "</h2><p>" + levelDifficulty[i] + "</p>")
    };
  };

  // Level select click event
  function levelSelect(){
    const level = this.firstChild.textContent.replace(/ /g, '');
    pubsub.transmit('levelStart', level);
  };

})();