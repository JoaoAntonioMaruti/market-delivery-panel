const extractMessage = (msg, messages = []) => {
  for (const field in msg) {
    if (typeof msg[field] === 'object') {
      extractMessage(msg[field], messages);
    } else {
      if (messages.indexOf(msg[field]) === -1) {
        messages.push(msg[field]);
      }
    }
  }
  return messages;
};

export default extractMessage;
