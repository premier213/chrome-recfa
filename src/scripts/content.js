// get message
chrome.runtime.onMessage.addListener(gotMessage);

/**p5.js class variable */
let p5c;

/**receive message */
function gotMessage(message, sender, sendResponse) {
  runCanvas(message);
}

/**run canvas when send message */
function runCanvas(value) {
  var stage = (p) => {
    createCanvas(p, value);
  };

  /** remove canvas */
  if (value.val === "frec-remove") {
    p5c.remove();
  } else {
    p5c = new p5(stage);
  }
}

/** stage started */
const createCanvas = (p, value) => {
  console.log("🚀 ~ file: content.js ~ line 28 ~ createCanvas ~ value", value);
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
    if (p.mouseIsPressed) {
      if (value.val === "frec-circle") {
        p.fill(169, 169, 169);
        p.strokeWeight(0);
        p.circle(p.mouseX, p.mouseY, 50);
      } else if (value.val === "frec-rect") {
        p.circle(0, 0, 0);
        p.fill(169, 169, 169);
        p.strokeWeight(0);
      }
    }
  };

  // p.draw = () => {
  //   if (value.msg === "frec-circle") {
  //     circleClass.display(p);
  //   }

  //   if (value.msg === "frec-rect") {
  //     rectClass.display(p);
  //   }
  // };

  // p.mouseDragged = () => {
  //   if (value.msg === "frec-line") {
  //     document.body.style["userSelect"] = "none";
  //     p.stroke(255, 0, 0);
  //     p.strokeWeight(2);
  //     p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  //   }
  //   if (value.msg === "frec-arrow") {
  //     document.body.style["userSelect"] = "none";
  //     p.stroke(255, 0, 0);
  //     p.strokeWeight(3);
  //     p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
  //   }
  // };

  // p.mouseReleased = () => {
  //   p.push();
  //   p.noStroke();
  //   p.fill(255, 0, 0);
  //   let angle = p.atan2(p.mouseY - p.pmouseY, p.mouseX - p.pmouseX);
  //   p.translate(p.mouseX, p.mouseY);
  //   p.rotate(angle);
  //   p.triangle(0, -10, 20, 0, 0, 10);
  // };
};

// class circle {
//   display(p) {
//     p.mouseClicked = () => {
//       p.fill(169, 169, 169);
//       p.strokeWeight(0);
//       p.circle(p.mouseX, p.mouseY, 50);
//     };
//   }
// }
// class rect {
//   display(p) {
//     p.mouseClicked = () => {
//       console.log("🚀 ~ file: content.js ~ line 105 ~ rect ~ display ~ p", p);
// p.fill(169, 169, 169);
// p.strokeWeight(0);
// p.rect(p.mouseX, p.mouseY, 100, 30);
//     };
//   }
// }
