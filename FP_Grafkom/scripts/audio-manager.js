var soundAudio;

function setupAudio() {

    const musicAudio = new Howl({
        src: ['assets/background.mp3'],
        autoplay: true,
        loop: true,
      });

      const musicId = musicAudio.play();
      musicAudio.fade(0, 0.7, 5000, musicId);

      // sound effects
  // (8 sounds for bonus collection + 1 "crash" sound, each 1 second)
    const sounds = {};
    for (let i = 0; i <= 7; i++) {
    sounds[`bonus-${i}`] = [i * 1000, 1000];
     }
    sounds.crash = [8000, 1000];
    soundAudio = new Howl({
        src: ['assets/little-robot-sound-84657.mp3'],
        volume: 0.8,
        sprite: sounds,
    });    
}