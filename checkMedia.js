function isMedia(message) {
  var media = false;
  if (message.text.indexOf('gif') > -1 || message.text.indexOf('jpg') > -1 || message.text.indexOf('png') > -1 || message.text.indexOf('video') > -1) {
    media = true;
  }
  return media;
}
