(function () {
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".minutes");
  const sec = document.querySelector(".seconds");

  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");

  let countdownTimer = null;

  startBtn.addEventListener("click", () => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;
    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countdownTimer = setInterval(() => {
        time();
      }, 1000);
    }
    startInterval();
  });
  function stopInterval(state) {
    startBtn.innerHTML = state = "pause" ? "Continue" : "Start";
    stopBtn.style.display = "none";
    startBtn.style.display = "initial";
    clearInterval(countdownTimer);
  }
  function time() {
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value) - 60;
    }
    if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0) {
      min.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  }

  stopBtn.addEventListener("click", () => {
    stopInterval("pause");
  });

  resetBtn.addEventListener("click", () => {
    hour.value = "";
    min.value = "";
    sec.value = "";
  });
})();
