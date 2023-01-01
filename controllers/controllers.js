import { checkCovidAllActions } from "./checkCovid.js";
import { getPath } from "../robot.js";
import { pocketActions } from "./pocket.js";
import { handleOpenDoor } from "./openDoor.js";
import { handleBringPill } from "./bringPill.js";
import { diagnosingActions, getPillActions } from "./currentActions.js";

export const controllers = () => {
  const robot_checkCovid = document.querySelector(".robot_checkCovid");
  const robot_bringPill = document.querySelector(".robot_bringPill");
  const openDoor = document.querySelector(".openDoor");

  const missionLists = document.querySelector(".missionLists_actions");

  const components = [robot_checkCovid, robot_bringPill, openDoor];
  components.forEach((component) => {
    component.addEventListener("click", () => {
      if (!getPath()) {
        switch (component.className) {
          case "button robot_checkCovid":
            checkCovidAllActions();
            diagnosingActions();
            break;
          case "button robot_bringPill":
            handleBringPill();
            getPillActions();
            break;
          case "button openDoor":
            handleOpenDoor();
            break;
          default:
            break;
        }
      } else {
        pocketActions();
      }
    });
  });
};
