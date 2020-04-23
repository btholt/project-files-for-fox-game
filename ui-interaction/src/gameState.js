import { modFox, modScene, togglePoopBag } from "./ui";

const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;

    if (this.clock === this.wakeTime) {
      this.wake();
    }

    return this.clock;
  },
  handleUserAction(icon) {
    console.log(icon);
  },
};

module.exports = gameState;
