import { elements } from 'src/constants/elements';
import { insertHtmlBeforeEnd } from 'src/utils/insertHtml';
import {
  ConfirmPassword,
  Email,
  FirstName,
  GoToAuthenticationLink,
  LastName,
  Login,
  Password,
  Phone,
  RegisterButton,
  Title,
} from 'src/modules/signIn';
import style from './signIn.module.scss';

export const renderSignInPage = () => {
  const html = `
        <div class="${style.container}">
            <form class="${style.form}">
                <div class="${style.titleWrapper}">
                    ${Title}
                </div>
                <div class="${style.inputGroup}">
                    <div class="${style.inputWrapper}">${Email}</div>
                    <div class="${style.inputWrapper}">${Login}</div>
                    <div class="${style.inputWrapper}">${FirstName}</div>
                    <div class="${style.inputWrapper}">${LastName}</div>
                    <div class="${style.inputWrapper}">${Phone}</div>
                    <div class="${style.inputWrapper}">${Password}</div>
                    <div class="${style.inputWrapper}">${ConfirmPassword}</div>
                </div>
                <div class="${style.buttonGroup}">
                    ${RegisterButton}
                    ${GoToAuthenticationLink}
                </div>
            </form>
        </div>
    `;

  insertHtmlBeforeEnd(elements.root, html);
};
