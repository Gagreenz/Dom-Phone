import { Formik, Form} from 'formik';
import React from "react";
import * as Yup from 'yup';
import InputField from './Components/InputField';

function RegisterForm({formClass}){
    return(
        <>
        <Formik
            initialValues={{email:"",phone:"",password:"",passwordConfirmed:""}}
            validationSchema={ Yup.object({
                email: Yup.string()
                    .max(15, 'Логин должен быть меньше 15 символов!')
                    .required("Поле логин необходимо заполнить!"),
                password: Yup.string()
                    .required("Поле пароль необходимо заполнить!"),
                passwordConfirmed: Yup.string()
                    .oneOf([Yup.ref('password')], 'Your passwords do not match.')
            })}
            onSubmit={(values) => alert(values.email)}
        >
            <Form className="auth-form">
                <div className='title'>Welcome</div>
                <InputField
                    inputClass="auth-input" 
                    errorClass="error"
                    placeholder="Логин"
                    type="text"
                    name="email" 
                />
                <InputField
                    inputClass="auth-input" 
                    errorClass="error"
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                />
                <InputField
                    inputClass="auth-input" 
                    errorClass="error"
                    type="password"
                    name="password" 
                    placeholder="Пароль"
                />
                <InputField
                    inputClass="auth-input" 
                    errorClass="error"
                    type="password"
                    name="passwordConfirmed" 
                    placeholder="Подтверждение пароля"
                />
                <label className="auth-label">
                    <input 
                        type="checkbox"
                        className='auth-checkbox'
                    />
                    Чужой компьютер
                </label>
                <button className="auth-btn" type="submit">Register</button>
            </Form>
        </Formik>
    </>
    )
}

export default RegisterForm;