const musicPlayer = (function() {

  //Cache DOM
  const $body = $(`body`);

  //Bind functions
  pubsub.subscribe('imageLoaded', loadMusic)

  function loadMusic(track) {

    const $musicPlayers = $($body).children('audio');
    const $musicPlayer = $(`#${track}`);

    $($musicPlayer).get(0).play();
    volume(track);

    $musicPlayers.map(player =>  {
      const currentPlayer = $musicPlayers[player].getAttribute('id')

      if ($musicPlayers[player].getAttribute('id') !== track) {
        $("audio[id*='"+currentPlayer+"']").get(0).pause();
        $("audio[id*='"+currentPlayer+"']").get(0).currentTime = 0;
      }
    });
  }

  function volume(track) {
    document.getElementById(track).volume = .05;
  };

})();