import {createInput, createButton, createTitle, createLink} from "src/components";

export const Title = createTitle({
    text: 'Вход'
});

export const Login = createInput({
    label: 'Логин',
    value: '',
    placeholder: 'Введите логин'
});

export const Password = createInput({
    label: 'Пароль',
    value: '',
    placeholder: 'Введите пароль',
    type: 'password'
});

export const AuthButton = createButton({
    text: 'Авторизоваться',
    type: 'submit',
    block: true
});

//TODO разобраться с циклическими ссылками из path
export const GoToRegistrationLink = createLink({
    href: '/signin',
    text: 'Нет аккаунта?',
    variant: 'secondary',
    block: true,
});