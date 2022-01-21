import { ArrowRight, Clip } from 'src/static/icons';
import style from './MessageForm.module.scss';

export function createMessageForm() {
  return `
        <div class="${style.container}">
            <button class="${style.iconButton}">
                <img src="${Clip}">
            </button>
            <input type="text" class="${style.messageInput}" placeholder="Сообщение">
            <button class="${style.iconButton}">
                <img src="${ArrowRight}">
            </button>
        </div>
    `;
}
