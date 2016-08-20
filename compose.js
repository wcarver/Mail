const MessageStore = require('./message_store.js').Message;
const MessageStore2 = require('./message_store.js').MessageStore;



class Compose{
  constructor () {
  }
}

Compose.prototype.render = function() {
  let composeBox = document.createElement("div");
  composeBox.className = 'new-message';
  composeBox.innerHTML = this.renderForm();
  composeBox.addEventListener('change', (event) => {
    let el = event.target;
    let name = el.name;
    let val = el.value;
    MessageStore2.updateDraftField(name, val);
  });
  composeBox.addEventListener('submit', (event) => {
    event.preventDefault();
    MessageStore2.sendDraft();
    window.location.hash = '#inbox';

  });
  return(composeBox);
};

Compose.prototype.renderForm = function() {
  let draft = MessageStore2.getMessageDraft();
  console.log(draft['to']);
  return `<p class="new-message-header">New Message</p><form class="compose-form"><input placeholder="Recipient" name="to" type="text" value="${draft['to']}"><input placeholder="Subject" name="subject" type="text" value="${draft['subject']}"><textarea name="body" rows="20">${draft['body']}</textarea><button type="submit" class="btn btn-danger submit-message">Send</button>`;
};

module.exports = Compose;
