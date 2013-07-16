chrome.runtime.sendMessage({
  html: '<!DOCTYPE ' + 
    document.doctype.name +
    (document.doctype.publicId?' PUBLIC "' +  document.doctype.publicId + '"':'') +
    (document.doctype.systemId?' "' + document.doctype.systemId + '"':'') + ">\n" +
    document.documentElement.outerHTML
});
