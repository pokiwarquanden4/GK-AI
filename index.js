
import { drawHuman, updateHuman } from "./patient.js";
import { drawPill, updatePill } from "./pill.js";
import { updateRobot, drawRobot } from "./robot.js";
import { drawWall, updateWall } from "./wall.js";

let lastRenderTime = 0;
const GAME_SPEED = 4;
const hospital = document.querySelector(".game");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / GAME_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);



function update() {
  updateRobot();
  updatePill();
  updateWall();
  updateHuman()
}

function draw() {
  hospital.innerHTML = "";
  drawRobot(hospital);
  drawPill(hospital);
  drawWall(hospital);
  drawHuman(hospital)
}


