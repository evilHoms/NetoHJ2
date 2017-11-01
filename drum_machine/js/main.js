'use strict';

const drumBtns = document.getElementsByClassName(`drum-kit__drum`);

for (let i = 0; i < drumBtns.length; i++) {
  drumBtns[i].onclick = playSound;
}

function playSound() {
  const sound = this.getElementsByTagName(`audio`)[0];
  sound.currentTime = 0;
  sound.play();
}