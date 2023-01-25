import { Formik, Form} from 'formik';
import React from "react";
import * as Yup from 'yup';
import InputField from './Components/InputField';
import axios from 'axios';

function RegisterForm(){
    const serverUrl = "https://localhost:7279/api/"
    var phoneRegEx = /((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    const SignupSchema = Yup.object({
        login: Yup.string()
            .max(15, 'Логин должен быть меньше 15 символов!')
            .required("Поле логин необходимо заполнить!"),
        phone: Yup.string()
            .required("Поле телефон необходимо заполнить!")
            .matches(phoneRegEx, "Неправильный номер"),
        password: Yup.string()
            .required("Поле пароль необходимо заполнить!"),
        passwordConfirmed: Yup.string()
            .oneOf([Yup.ref('password'),null], 'Пароли не совпадают!')
            .required("Поле необходимо заполнить!"),
    });

    
    const handleSubmit = (values) => {
        axios({
            method: "post",
            url: serverUrl + "Account/register",
            data:{
                login: values.login,
                phone: values.phone,
                password: values.password
            },
            headers: { "Content-Type": "application/json" },
        })  
        .then((response) =>{
            console.log(response);
        })
        .catch((response) =>{
            console.log(response);
        });
    }
    return(
        <>
        <Formik
            initialValues={{login:"",phone:"",password:"",passwordConfirmed:""}}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            <Form className="auth-form" noValidate>
                <div className='title'>Welcome</div>
                <InputField
                    inputClass="auth-input" 
                    errorClass="error"
                    placeholder="Логин"
                    type="text"
                    name="login" 
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