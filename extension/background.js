chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var html = request.html;
    if (!request.html) return;
    var textElem = document.getElementById('textToCopy');
    textElem.value = html;
    textElem.focus();
    textElem.select();
    document.execCommand('copy');
  }
);
