// get message
chrome.runtime.onMessage.addListener(gotMessage);

/**p5.js class variable */
let P5C;
let STAGE_VALUE;
let CAPTURE = new CCapture({ format: "png" });

/**receive message */
function gotMessage(message, sender, sendResponse) {
  runCanvas(message);
}

/**run canvas when send message */
function runCanvas(value) {
  var stage = (p) => {
    createCanvas(p, value.val);
  };

  capture = new CCapture({
    format: "png",
  });

  P5C = new p5(stage);
}

/** stage started */
const createCanvas = (p, value) => {
  STAGE_VALUE = value;
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
    if (STAGE_VALUE === "frec-remove") {
      p.remove();
    }
    if (value.val === "frec-stop") {
      console.log("stop");

      capturer.save();
    }
  };
  p.mouseClicked = () => {
    if (STAGE_VALUE === "frec-circle") {
      p.fill(169, 169, 169);
      p.strokeWeight(0);
      p.circle(p.mouseX, p.mouseY, 50);
    } else if (STAGE_VALUE === "frec-rect") {
      p.fill(169, 169, 169);
      p.strokeWeight(0);
      p.rect(p.mouseX, p.mouseY, 100, 30);
    }
  };
  p.mouseDragged = () => {
    if (STAGE_VALUE === "frec-line") {
      document.body.style["userSelect"] = "none";
      p.stroke(255, 0, 0);
      p.strokeWeight(2);
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
    if (STAGE_VALUE === "frec-arrow") {
      document.body.style["userSelect"] = "none";
      p.stroke(255, 0, 0);
      p.strokeWeight(3);
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  };
};
