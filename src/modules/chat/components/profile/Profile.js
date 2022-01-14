import { DefaultAvatar, ThreePoint } from 'src/static/icons';
import style from './Profile.module.scss';

export function createProfile() {
  return `
        <header class="${style.container}">
            <img class="${style.avatar}" src="${DefaultAvatar}" width="34" height="34">
            <h3 class="${style.username}">Илья</h3>
            <button class="${style.dropdown}">
                <img src="${ThreePoint}" width="3" height="15">
            </button>
        </header>
    `;
}
