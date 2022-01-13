const getAttribute = attribute => value => value
    ? `${attribute}="${value}"`
    : '';

//TODO возможно удобнее будет переписать на массив аттрибутов
export const getDisabled = getAttribute('disabled');
export const getType = getAttribute('type');
export const getValue = getAttribute('value');
export const getPlaceholder = getAttribute('placeholder');