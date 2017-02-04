chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  chrome.tabs.executeScript(null, {
    file: "inject.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      console.log('error!');
    }
  });

}

window.onload = onWindowLoad;

var flip = true;

$(document).ready(function(){
  $('#moo').click(function(){
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            {'red': flip},
            // ...also specifying a callback to be called
            //    from the receiving end (content script)
            function(){
            });
        flip = false;
      });
  })

})
