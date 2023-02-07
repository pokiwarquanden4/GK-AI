const currentImg = document.querySelector(".currentActions_png");
const currentContent = document.querySelector(".currentActions_content");

export const diagnosingActions = () => {
  currentImg.src = "img/mentoring.png";
  currentContent.innerHTML = "Diagnosing";
};

export const defaultActions = () => {
  currentImg.src = "img/sleepingRobot.png";
  currentContent.innerHTML = "........";
};

export const pushPatientActions = () => {
  currentImg.src = "img/pushPatientToBed.png";
  currentContent.innerHTML = "Patient To Bed";
};

export const getPillActions = () => {
  currentImg.src = "img/getPillRobot.png";
  currentContent.innerHTML = "Get Some Pill ...";
};

export const bringPillToPatientActions = () => {
  currentImg.src = "img/getPillRobot.png";
  currentContent.innerHTML = "Pill To Patient";
};
