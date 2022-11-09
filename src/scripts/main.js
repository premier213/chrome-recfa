function setup() {
  noCanvas();
  let fLine = select("#frec-pencil");
  fLine.mousePressed(() => msg("frec-pencil"));
  let fClear = select("#frec-remove");
  fClear.mousePressed(() => msg("frec-remove"));
}

function msg(args) {
  let params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, msg);

  function msg(tab) {
    let msg = {
      val: args,
    };
    chrome.tabs.sendMessage(tab[0].id, msg);
  }
}
