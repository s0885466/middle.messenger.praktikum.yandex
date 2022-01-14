import { Search } from 'src/static/icons';
import style from './Search.module.scss';

export function createSearch() {
  return `
         <input type="text" class="${style.search}" placeholder="Поиск"/>
         <img src="${Search}" class="${style.searchIcon}">
    `;
}
