/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);
	const Sent = __webpack_require__(4);
	const Compose = __webpack_require__(5);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }
	}

	Router.prototype.start = function () {
	  this.render();
	  window.addEventListener('hashchange', () => {
	    this.render();
	  });
	};

	Router.prototype.activeRoute = function () {
	  let fragment = window.location.hash;
	  fragment = fragment.substring(1);
	  return this.routes[fragment];

	};

	Router.prototype.render = function () {
	  let component = this.activeRoute();

	  if (component === undefined) {
	    this.node.innerHTML = "";
	  } else {
	    this.node.innerHTML = "";
	    this.node.appendChild(component.render());
	  }
	};

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3).Message;

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3).Message;


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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3).Message;
	const MessageStore2 = __webpack_require__(3).MessageStore;



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


/***/ }
/******/ ]);