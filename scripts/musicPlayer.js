//This file controls the music
import {pubsub} from'./pubsub';

const musicPlayer = (function() {

  //Cache DOM
  const $body = $(`body`);
  const $musicPlayers = $body.children('audio');

  //Event Listeners
  pubsub.subscribe('imageLoaded', pauseMusic);

  function pauseMusic(node) {
    const track = node.getAttribute('id');
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
      playPromise.catch(() => { $musicPlayer.play(); });
    };

    setVolume(track);
  };

  function setVolume(track) {
    document.getElementById(track).volume = .05;
  };

})();