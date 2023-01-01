import { getPath } from "./robot.js";

let path = null;

export const updatePath = () => {
  path = getPath();
};

export const drawPath = (hospital) => {
  if (path) {
    path.forEach((position) => {
      const pathElement = document.createElement("div");
      pathElement.style.gridRowStart = position.y;
      pathElement.style.gridColumnStart = position.x;
      pathElement.classList.add("path");

      hospital.appendChild(pathElement);
    });
  }
};
