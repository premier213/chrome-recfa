// get message
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  runCanvas(message.val);
}

let p5c;

function runCanvas(value) {
  var stage = (p) => {
    createCanvas(p, value);
  };

  if (value === "frec-remove") {
    p5c.remove();
  } else {
    p5c = new p5(stage);
  }
}

const createCanvas = (p, value) => {
  p.setup = () => {
    let c = p.createCanvas(
      p.windowWidth - 20,
      document.documentElement.scrollHeight
    );
    c.position(0, 0);
    c.style("z-index", "10000");
    c.style("pointer-events", "none");
  };

  p.draw = () => {
    if (value === "frec-line") {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  };
};
