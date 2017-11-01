'use strict';

const dropMenuBtn = document.getElementsByClassName(`wrapper-dropdown`)[0];

dropMenuBtn.onclick = () => { 
  dropMenuBtn.classList.toggle(`active`);
};