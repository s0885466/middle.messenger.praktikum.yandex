import { renderLoginPage } from 'src/pages/login/login';
import { renderSignInPage } from 'src/pages/signIn/signIn';
import { renderChatPage } from 'src/pages/chat/chat';
import { render404Page, render500Page } from 'src/pages/errorPage/errorPage';

export const paths = {
  login: '/',
  signIn: '/signin',
  chat: '/chat',
  page404: '/page404',
  page500: '/page500',
};

export const routes = {
  [paths.login]: {
    page: renderLoginPage,
  },
  [paths.signIn]: {
    page: renderSignInPage,
  },
  [paths.chat]: {
    page: renderChatPage,
  },
  [paths.page404]: {
    page: render404Page,
  },
  [paths.page500]: {
    page: render500Page,
  },
};

export const renderPage = (path) =>
  routes[path] ? routes[path].page() : routes[paths.page404].page();
