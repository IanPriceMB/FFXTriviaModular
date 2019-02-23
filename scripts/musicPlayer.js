const musicPlayer = (function() {

  //Cache DOM
  const $body = $(`body`);
  const $musicPlayers = $body.children('audio');

  //Bind Events
  pubsub.subscribe('imageLoaded', pauseMusic);

  function pauseMusic(track) {
    $musicPlayers.map(index =>  {
      const playerID = $musicPlayers[index].getAttribute('id');
      const $currentPlayer = $("audio[id*='"+playerID+"']").get(0);

      if (playerID !== track) {
        $currentPlayer.pause();
        $currentPlayer.currentTime = 0;
      };
    });

    playMusic(track);
  }

  function playMusic(track) {
    const $musicPlayer = $(`#${track}`).get(0);
    const playPromise = $musicPlayer.play();

    if (playPromise !== null){
      console.log(playPromise);
      playPromise.catch(() => { $musicPlayer.play(); });
    };

    changeVolume(track);
  };

  function changeVolume(track) {
    document.getElementById(track).volume = .05;
  };

})();