const MessageStore = require('./message_store.js').Message;


class Sent {
  constructor(){

  }
}

Sent.prototype.render = function() {
  let container = document.createElement('ul');
  container.className = 'messages';
  let a = new MessageStore();
  let sentMessages = a.getSentMessages();
  sentMessages.forEach( el => {
    container.appendChild(this.renderMessage(el));
  });
  return(container);
};

Sent.prototype.renderMessage = function(message) {
  let messageItem = document.createElement('li');
  messageItem.className = 'message';
  messageItem.innerHTML = `<span class="to">$${message.to}</span><span class="subject">${message.subject}:</span><span class="body">${message.body}</span>`;
  return messageItem;
};

module.exports = Sent;
