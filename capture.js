var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = new Image();
image.onload = function() {
  // Draw the image onto the canvas
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Add a crop event listener
  document.getElementById('crop').addEventListener('click', function() {
    // Crop the image
    var croppedImage = context.getImageData(0, 0, canvas.width / 2, canvas.height / 2);

    // Send the cropped image to the background script
    chrome.runtime.sendMessage({croppedImage: croppedImage});
  });
};
image.src = chrome.extension.getBackgroundPage().screenshotUrl;
