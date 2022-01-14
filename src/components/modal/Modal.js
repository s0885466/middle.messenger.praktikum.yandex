import style from './Modal.module.scss';

export function createModal({ content }) {
  return `
        <div class="${style.modalWrapper}">
             <div class="${style.body}">
                ${content}
            </div>
        </div>`;
}
