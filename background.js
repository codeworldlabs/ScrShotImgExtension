var screenshotUrl;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.croppedImage) {
    // Do something with the cropped image, e.g. save it to storage
    chrome.storage.local.set({'croppedImage': request.croppedImage}, function() {
      console.log('Cropped image saved.');
    });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    // Store the current screenshot URL for use in the capture.html page
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (url) {
      screenshotUrl = url;
    });
  }
});
