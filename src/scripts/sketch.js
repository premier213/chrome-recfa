// function setup() {
//   document.body.style["userSelect"] = "none";
//   let c = createCanvas(windowWidth, windowHeight);
//   c.position(0, 0);
//   c.style("pointer-events", "none");
//   clear();
// }

function draw() {
  stroke(0);
  strokeWeight(4);
  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX, mouseY, 50, 50);
  }
}

// function doubleClicked() {
//   remove();
// }
