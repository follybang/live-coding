export const timer = {
  intervalId: 0,
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },

  resetTimer() {
    (this.secondsPassed = 0), (this.minsPassed = 0);
  },
};

timer.startTimer();
