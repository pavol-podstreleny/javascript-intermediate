function StopWatch() {
  let time = 0;
  let startCounting = 0;
  let stopCounting = 0;

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

const stopWatch = new StopWatch();
stopWatch.start();
stopWatch.start();
