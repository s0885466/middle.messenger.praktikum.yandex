import {
  createButton,
  createInput,
  createLink,
  createTitle,
} from 'src/components';

export const Title = createTitle({
  text: 'Регистрация',
});

export const Email = createInput({
  label: 'Почта',
  value: '',
  placeholder: 'Введите почту',
  type: 'mail',
});

export const Login = createInput({
  label: 'Логин',
  value: '',
  placeholder: 'Введите логин',
});

export const FirstName = createInput({
  label: 'Имя',
  value: '',
  placeholder: 'Введите имя',
});

export const LastName = createInput({
  label: 'Фамилия',
  value: '',
  placeholder: 'Введите фамилию',
});

export const Phone = createInput({
  label: 'Телефон',
  value: '',
  placeholder: 'Введите телефон',
  type: 'phone',
});

export const Password = createInput({
  label: 'Пароль',
  value: '',
  placeholder: 'Введите пароль',
  type: 'password',
});

export const ConfirmPassword = createInput({
  label: 'Пароль (еще раз)',
  value: '',
  placeholder: 'Пароль (еще раз)',
  type: 'password',
});

export const RegisterButton = createButton({
  text: 'Зарегистрироваться',
  type: 'submit',
  block: true,
});

export const GoToAuthenticationLink = createLink({
  href: '/',
  text: 'Войти',
  variant: 'secondary',
  block: true,
});
