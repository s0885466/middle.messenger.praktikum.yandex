import {getClassNames} from "src/utils/getClassNames";
import {getDisabled, getPlaceholder, getType, getValue} from "src/utils/getAttribute";
import * as styles from "./Input.module.scss";

export function createInput({
                                label = '',
                                value = '',
                                placeholder = '',
                                disabled = false,
                                type = 'text',
                                isTouched = false,
                                isError = false,
                                errorMessage = ''
                            }) {
    const attributes = getClassNames(
        getDisabled(disabled),
        getType(type),
        getValue(value),
        getPlaceholder(placeholder)
    );

    const classInputWrapper = getClassNames(styles.inputWrapper, isError && isTouched && styles.error);

    const ErrorMessage = getClassNames(isError && errorMessage && isTouched) &&
        `<div class=${styles.errorMessage}>${errorMessage}</div>`

    return `
        <div class=${styles.container}>
            <label class="${classInputWrapper}">
                <span class="${styles.label}">${label}</span>
                <input ${attributes} class="${styles.input}">
           </label>
           ${ErrorMessage}
       </div>
    `;
}