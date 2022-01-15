import style from './MessagesList.module.scss';
import { createMessageItem } from './messageItem/MessageItem';

export const createMessagesList = () => `
    <div class="${style.container}">
        ${[...Array(20).keys()]
          .map((el) => createMessageItem(el % 2 === 0))
          .join('')}
    </div>
`;
