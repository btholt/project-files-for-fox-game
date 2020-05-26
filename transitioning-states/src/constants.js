export const ICONS = ["fish", "poop", "weather"];
export const SCENES = ["day", "rain"];
export const TICK_RATE = 3000;
export const RAIN_CHANCE = 0.2;
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 4;
export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 3) + 3 + clock;
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;
