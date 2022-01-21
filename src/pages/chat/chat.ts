import { elements } from 'src/constants/elements';
import { insertHtmlBeforeEnd } from 'src/utils/insertHtml';
import { More } from 'src/static/icons';
import {
  MessageForm,
  MessagesList,
  Profile,
  Search,
  UsersList,
} from 'src/modules/chat';
import style from './chat.module.scss';

export const renderChatPage = () => {
  const html = `
        <div class="${style.container}">
            <aside class="${style.sidebar}">
                <div class="${style.sidebarHeader}">
                    <a href="/profile" class="${style.profileLink}">
                        Профиль<img src="${More}"/>
                    </a>
                    <div class="${style.searchWrapper}">
                       ${Search}
                    </div>
                </div>
                <div class="${style.usersListWrapper}">
                    ${UsersList}
                </div>
            </aside>
            <section class="${style.main}">
                <div class="${style.profileWrapper}">
                    ${Profile}
                </div>   
                <div class="${style.messageListWrapper}">
                    ${MessagesList}
                </div>
                <div class="${style.messageFormWrapper}">
                    ${MessageForm}
                </div>
            </section>
        </div>`;

  insertHtmlBeforeEnd(elements.root, html);
};
