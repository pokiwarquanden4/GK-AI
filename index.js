import { drawHuman, updateHuman } from "./patient.js";
import { drawPill, updatePill } from "./pill.js";
import { updateRobot, drawRobot } from "./robot.js";
import { drawWaiting, updateWaiting } from "./waitingPerson.js";
import { drawWall, updateWall } from "./wall.js";
import { controllers } from "./controllers/controllers.js";
import { drawPath, updatePath } from "./path.js";

let lastRenderTime = 0;
const GAME_SPEED = 15;
const hospital = document.querySelector(".game");

//Game Loop
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / GAME_SPEED) return;

  lastRenderTime = currentTime;

  update(hospital);
  draw(hospital);
}
window.requestAnimationFrame(main);

//Controllers
controllers();

function update(hospital) {
  updateRobot();
  updatePill();
  updateWall();
  updateHuman();
  updateWaiting();
  updatePath();
}

export function draw(hospital, check) {
  if (!check) {
    hospital.innerHTML = "";
    drawRobot(hospital);
    drawPill(hospital);
    drawWall(hospital);
    drawHuman(hospital);
    drawWaiting(hospital);
    drawPath(hospital);
  } else {
    hospital.innerHTML = "";
    drawRobot(hospital);
    drawPill(hospital);
    drawWall(hospital);
    drawHuman(hospital, true);
    drawWaiting(hospital);
    drawPath(hospital);
  }
}
