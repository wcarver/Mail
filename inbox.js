const MessageStore = require("./message_store.js").Message;

class Inbox {
  constructor() {

  }


}

Inbox.prototype.render = function () {
  let container = document.createElement('ul');
  container.className = 'messages';
  let a = new MessageStore();
  let inboxMessages = a.getInboxMessages();
  inboxMessages.forEach( el => {
    container.appendChild(this.renderMessage(el));
  });
  return(container);
};

Inbox.prototype.renderMessage = function (message){
  let messageItem = document.createElement('li');
  messageItem.className = 'message';
  messageItem.innerHTML = `<span class="from">${message.from}</span><span class="subject">${message.subject}:</span><span class="body">${message.body}</span>`;
  return messageItem;
};

module.exports = Inbox;
