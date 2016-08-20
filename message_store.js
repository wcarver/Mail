let messages = {sent: [
  {to: "papa@zaddy.com", subject: "hey bebe ", body: "hey bebe it zaddy come heah"},
  {to: "tiny_bobo@poo.com", subject: "THE TRUTH ABOUT HILAARARY CLINTON ", body: "IF YOU DONT REPOST THIS U WIL DIE AND HILARY WILL ABSORB UR LIFE FORCE"}
], inbox: [
  {from: "will@ashley.com", subject: " a williamashley dot com", body: " bodylicious"},
  {from: "robert@bertbert.com", subject: "I am eat a whole potato", body: " et et eet"}
]};

class Message {
  constructor (fr = "", to = "", body = "", subject = "") {
    this.fr = fr;
    this.to = to;
    this.body = body ;
    this.subject = subject;
  }
}

let messageDraft = new Message();

const MessageStore = {

  getMessageDraft() {
    return messageDraft;
  },
  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message();
    localStorage.setItem('messages', JSON.stringify(messages));
  },
  updateDraftField(field, value) {
    messageDraft[field] = value;
  }
};


Message.prototype.getInboxMessages = function () {
  return messages.inbox;
};

Message.prototype.getSentMessages = function () {
  return messages.sent;
};

module.exports = {MessageStore, Message};
