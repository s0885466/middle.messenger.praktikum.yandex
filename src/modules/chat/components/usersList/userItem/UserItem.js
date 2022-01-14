import { DefaultAvatar } from 'src/static/icons';
import style from './UserItem.module.scss';

export function createUserItem() {
  return `
        <article class="${style.container}">
            <img class="${style.avatar}" src="${DefaultAvatar}" width="48" height="48">
            <div class="${style.content}">
                <h3 class="${style.name}">Илья</h3>
                <div class="${style.message}">
                    Так увлёкся работой по курсу, что совсем забыл его анонсир...
                    Так увлёкся работой по курсу, что совсем забыл его анонсир...  
                </div>
            </div>                  
            <div class="${style.time}">10:49</div>
            <div class="${style.messageCounter}">3</div>
        </article>
    `;
}
