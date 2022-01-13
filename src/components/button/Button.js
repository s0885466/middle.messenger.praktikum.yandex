import {getClassNames} from "src/utils/getClassNames";
import {getDisabled, getType} from "src/utils/getAttribute";
import * as styles from './Button.module.scss';

export function createButton({
                                 text,
                                 block,
                                 variant = 'primary',
                                 disabled = false,
                                 type,
                                 classNames,
                             }) {

    const className = getClassNames(
        styles.button,
        block && styles.block,
        styles[variant],
        classNames
    );
    const attributes = getClassNames(
        getDisabled(disabled),
        getType(type)
    );

    return `
        <button class="${className}" ${attributes}>
            ${text}
        </button>
    `;
}
