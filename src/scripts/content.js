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
      p.mouseDragged = () => {
        document.body.style["userSelect"] = "none";
        p.stroke(255, 0, 0);
        p.strokeWeight(2);
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      };
    }
    if (value === "frec-circle") {
      p.mouseClicked = () => {
        p.fill(169, 169, 169);
        p.strokeWeight(0);
        p.circle(p.mouseX, p.mouseY, 50);
      };
    }
    if (value === "frec-rect") {
      p.mouseClicked = () => {
        p.fill(169, 169, 169);
        p.strokeWeight(0);
        p.rect(p.mouseX, p.mouseY, 100, 30);
      };
    }
    if (value === "frec-arrow") {
      p.mouseDragged = () => {
        document.body.style["userSelect"] = "none";
        p.stroke(255, 0, 0);
        p.strokeWeight(3);
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      };
      p.mouseReleased = () => {
        p.push();
        p.noStroke();
        p.fill(255, 0, 0);
        let angle = p.atan2(p.mouseY - p.pmouseY, p.mouseX - p.pmouseX);
        p.translate(p.mouseX, p.mouseY);
        p.rotate(angle);
        p.triangle(0, -10, 20, 0, 0, 10);
      };
    }
  };
};
