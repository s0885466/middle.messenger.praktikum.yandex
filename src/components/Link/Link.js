import {getClassNames} from "src/utils/getClassNames";
import * as styles from './Link.module.scss';

export function createLink({
                               text,
                               href,
                               block,
                               variant = 'primary',
                               disabled = false,
                               classNames,
                           }) {

    const className = getClassNames(
        styles.link,
        block && styles.block,
        styles[variant],
        disabled && styles.disabled,
        classNames
    );

    return `
        <a class="${className}" href="${href}">
            ${text}
        </a>
    `;
}