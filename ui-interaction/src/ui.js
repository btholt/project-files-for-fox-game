module.exports = {
  modFox(state) {
    document.querySelector(".fox").className = `fox fox-${state}`;
  },
  modScene(state) {
    document.querySelector(".game").className = `game ${state}`;
  },
  togglePoopBag(show) {
    document.querySelector(".poop-bag").classList.toggle("hidden", !show);
  },
};
