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
