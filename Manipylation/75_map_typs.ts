export interface IForm {
    name: string;
    password: string
}

const form: IForm = {
    name: 'Вася',
    password: '123',
}

const formValidation: Validation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMassage: 'Должен быть длиннее 5 символов'}
}

type Validation<T> = {
    [K in keyof T]: {
    isValid: true
} | {
    isValid: false;
    errorMassage: string
}
}
