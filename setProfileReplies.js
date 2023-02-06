function isReply(message, user) {
  var reply = false;
  if (message.text.indexOf('@' + user.name) > -1) {
    reply = true;
  }
  return reply;
}
