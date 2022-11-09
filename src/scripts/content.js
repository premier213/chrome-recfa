// get message
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  sketch(message.val);
}

function sketch(value) {
  let p5Canvas;
  var sketch = function (p) {
    p.setup = function () {
      let canvas = p.createCanvas(400, 400);
      canvas.background(0);
    };
  };
  if (value === "frec-pencil") {
    p5Canvas = new p5(sketch);
  }
  if (value === "frec-remove") {
    p5Canvas = new p5(sketch);
  }
}
