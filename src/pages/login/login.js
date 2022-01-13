import {AuthButton, Login, Password, GoToRegistrationLink, Title} from "src/modules/login";
import {elements} from "src/constants/elements";
import {insertHtmlBeforeEnd} from "src/utils/insertHtml";
import style from './login.module.scss';

export const renderLoginPage = () => {

    const html = `
        <div class="${style.container}">
            <form class="${style.form}">
                <div class="${style.titleWrapper}">
                    ${Title}
                </div>
                <div class="${style.inputGroup}">
                    <div class="${style.inputWrapper}">${Login}</div>
                    <div class="${style.inputWrapper}">${Password}</div>
                </div>
                <div class="${style.buttonGroup}">
                    ${AuthButton}
                    ${GoToRegistrationLink}
                </div>
            </form>
       </div>
    `;

    insertHtmlBeforeEnd(elements.root, html);
}