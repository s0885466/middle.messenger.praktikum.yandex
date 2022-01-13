import * as styles from './Title.module.scss';

export function createTitle({
                                text
                            }) {
    return `
        <h1 class="${styles.title}">
            ${text}
        </h1>
    `;
}