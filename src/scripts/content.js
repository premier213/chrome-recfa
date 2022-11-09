// get message
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  sketch(message.val);
}

function sketch(value) {
  let p5c = (value) => new p5(value);

  var sketch = function (p) {
    p.setup = function () {
      if (value === "frec-edit") {
        let canvas = p.createCanvas(400, 400);
        canvas.background(0);
        canvas.position(0, 0);
      }
      if (value === "frec-remove") {
        $("canvas").remove();
      }
    };
  };

  p5c(sketch);
}
