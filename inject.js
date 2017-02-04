chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request.red){
    console.log('moo')
    $('p').css({'color': 'red'})
  } else {
    $('p').css({'color': 'black'})
  }
})
