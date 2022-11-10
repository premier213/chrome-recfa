function setup() {
  noCanvas();
  let fEdit = select("#frec-edit");
  fEdit.mousePressed(() => msg("frec-edit"));
  let fClear = select("#frec-remove");
  fClear.mousePressed(() => msg("frec-remove"));
  let fLine = select("#frec-line");
  fLine.mousePressed(() => msg("frec-line"));
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
