document.getElementById('capture').addEventListener('click', function() {
  chrome.tabs.captureVisibleTab(function(screenshotUrl) {
    var preview = new Image();
    preview.src = screenshotUrl;
    document.getElementById('preview-container').appendChild(preview);
  });
});
