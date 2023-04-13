/* eslint-disable no-restricted-globals */

const workercode = () => {
  let timerInterval;
  let time = 0;
  self.onmessage = function ({ data: { turn } }) {
    if (turn === "off" || timerInterval) {
      clearInterval(timerInterval);
      time = 600;
    }
    if (turn === "on") {
      time = 600;
      timerInterval = setInterval(() => {
        time -= 100;
        self.postMessage({ time });

        if (time <= 0) {
          clearInterval(timerInterval);
          return;
        }
  
      }, 1000);
    }
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;