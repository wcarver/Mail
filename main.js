const Router = require('./router.js');
const Inbox = require('./inbox.js');
const Sent = require('./sent.js');
const Compose = require('./compose.js');

class Routes {
  constructor() {
    this.inbox = new Inbox();
    this.sent = new Sent();
    this.compose = new Compose();
    //Still need to make the classes for these;
  }
}
const routes = new Routes();

document.addEventListener('DOMContentLoaded', () => {
  const inboxLink = document.getElementById('inbox');
  const sentLink = document.getElementById('sent');
  const composeButton = document.getElementById('btnn');
  let domNode = document.querySelector('.content');
  let router = new Router(domNode, routes);
  router.start();
  inboxLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = inboxLink.innerHTML.toLowerCase();
  });
  sentLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = sentLink.innerHTML.toLowerCase();
  });
  composeButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = composeButton.innerHTML.toLowerCase();
  });

});
