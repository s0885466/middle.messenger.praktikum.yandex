import { paths, routes } from './routes';

class Router {
  constructor() {
    this.routes = routes;
  }

  goTo(path) {
    const push = (path) => window.history.pushState({}, '', path);

    if (!this.routes[path]) {
      push(paths.page404);

      return;
    }

    push(path);
  }

  getLocation() {
    return window.location.pathname;
  }
}
export default Router;
