import {elements} from "src/constants/elements";
import {insertHtmlBeforeEnd} from "src/utils/insertHtml";
import {createTitle} from "src/components";
import style from './errorPage.module.scss';

const TITLE_404 = '404';
const DESCRIPTION_404 = 'Не туда попали';

const renderPage = ({
                               title = TITLE_404,
                               description = DESCRIPTION_404
                           }) =>  () => {
    const html = `
        <div class="${style.container}">
            <div class="${style.content}">
                ${createTitle({text: title})}
                <div class="${style.descriptionWrapper}"> 
                    <p>${description}</p>
                </div>
                <div class="${style.linkWrapper}">
                    <a href="/chat">Назад к чатам</a>
                </div>
            </div>
        </div>`;

    insertHtmlBeforeEnd(elements.root, html);
}

export const render404Page = renderPage({});
export const render500Page = renderPage({
    title: '500',
    description: 'Мы уже фиксим'
})
