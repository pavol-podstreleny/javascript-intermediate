function StopWatch() {
  this.time = 0;
  this.startCounting = 0;
  this.stopCounting = 0;

  let started = false;
  let finished = false;

  Object.defineProperty(this, "duration", {
    get: function () {
      time += startCounting - stopCounting;
      return time;
    },
  });

  this.start = function () {
    if (started) {
      console.error("Cannot start twice");
    } else {
      started = true;
      finished = false;
      startCounting = new Date().getTime();
    }
  };

  this.stop = function () {
    if (finished) {
      console.error("Cannot stop twice");
    } else {
      finished = true;
      started = false;
      stopCounting = new Date().getTime();
    }
  };

  this.reset = function () {
    time = 0;
  };
}

StopWatch.prototype.start = function () {
  if (this.started) {
    console.error("Cannot start twice");
  } else {
    this.started = true;
    this.finished = false;
    this.startCounting = new Date().getTime();
  }
};

StopWatch.prototype.stop = function () {};

StopWatch.prototype.reset = function () {};

const stopWatch = new StopWatch();
stopWatch.start();
stopWatch.start();
