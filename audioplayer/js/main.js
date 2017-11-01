'use strict';

const player = document.getElementsByClassName(`mediaplayer`)[0];
const playerBtns = document.getElementsByTagName(`button`);
const trackList = player.getElementsByClassName(`track`);
let title = document.getElementsByClassName(`title`)[0];

for (let track of trackList) {
  track.onended = stopEvent;
}

for (let btn of playerBtns) {
  if (btn.classList.contains(`back`)) {
    btn.onclick = backEvent;
  }
  else if (btn.classList.contains(`playstate`)) {
    btn.onclick = changeStateEvent;
  }
  else if (btn.classList.contains(`stop`)) {
    btn.onclick = stopEvent;
  }
  else if (btn.classList.contains(`next`)) {
    btn.onclick = nextEvent;
  }
}

function backEvent() {
  stopEvent();
  for (let i = 0; i < trackList.length; i++) {
    
    if (trackList[i].classList.contains(`current`)) {
      trackList[i].classList.remove(`current`);
      
      if (i > 0) {
        trackList[i - 1].classList.add(`current`);
        break;
      }
      else {
        trackList[trackList.length - 1].classList.add(`current`);
        break;
      }
      
    }
  }

  changeTitle();
}

function changeStateEvent() {
  if (player.classList.contains(`play`)) {
    for (let track of trackList) {
      if (track.classList.contains(`current`)) {
        track.pause();
        break;
      }
    }
  }
  else {
    for (let track of trackList) {
      if (track.classList.contains(`current`)) {
        track.play();
        break;
      }
    }
  }
  
  player.classList.toggle(`play`);
  changeTitle();
}

function stopEvent() {
  player.classList.remove(`play`);
  
  for (let track of trackList) {
    if (track.classList.contains(`current`)) {
      track.pause();
      track.currentTime = 0;
      break;
    }
  }
}

function nextEvent() {
  stopEvent();
  for (let i = 0; i< trackList.length; i++) {
    if (trackList[i].classList.contains(`current`)) {
      trackList[i].classList.remove(`current`);
      if (i < trackList.length - 1) {
        trackList[i + 1].classList.add(`current`);
        break;
      }
      else {
        trackList[0].classList.add(`current`);
        break;
      }
    }
  }

  changeTitle();
}

function changeTitle() {
  for (let i = 0; i < trackList.length; i++) {
    if (trackList[i].classList.contains(`current`)) {
      title.title = trackList[i].title;
      break;
    }
  }
}