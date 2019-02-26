//This file contains all the scripts for the main menu

const gameMenu = (function(){

  //Cache DOM
  const $container = $(`.container`);
  
  //Bind Events
  $container.on('click', '.level-button', levelSelect);

  //Event Listeners
  pubsub.subscribe('mainMenu', componentDidMount);

  function componentDidMount(){
    const data = state.getState();
    render(data);
  };

  function render(data){
    $container.empty();
    for(let i = 0; i < Object.keys(data.level).length; i++) {
      const level = Object.keys(data.level)[i]
      const levelButton = $("<div class='level-button'>");
      $container.append(levelButton);
      levelButton.append("<h2>" + level + "</h2>")
    };
  };

  // Level select click event
  function levelSelect(){
    const level = this.firstChild.textContent.replace(/ /g, '');
    state.updateLevelTracker(level);
    pubsub.transmit('levelStart');
  };

})();