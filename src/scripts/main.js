function capturing() {
  const time = Date.now();
  chrome.tabs.captureVisibleTab((data) => dl(data));
  let dl = (url) => chrome.downloads.download({ filename: `${time}.png`, url });
}

function setup() {
  noCanvas();
  $("#frec-remove").click(() => msg("frec-remove"));
  $("#frec-circle").click(() => msg("frec-circle"));
  $("#frec-rect").click(() => msg("frec-rect"));
  $("#frec-line").click(() => msg("frec-line"));
  // $("#frec-start").click(() => record("frec-start"));
  // $("#frec-stop").click(() => record("frec-stop"));
  $("#frec-screenshot").click(() => capturing());
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
