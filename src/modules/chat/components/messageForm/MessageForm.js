import {ArrowRight, Clip} from "src/static/icons";
import style from './MessageForm.module.scss';

export function createMessageForm() {
    return `
        <div class="${style.container}">
            <button class="${style.iconButton}">
                <img src="${Clip}" width="30" height="30">
            </button>
            <input type="text" class="${style.messageInput}" placeholder="Сообщение">
            <button class="${style.iconButton}">
                <img src="${ArrowRight}" width="28" height="28">
            </button>
        </div>
    `
}