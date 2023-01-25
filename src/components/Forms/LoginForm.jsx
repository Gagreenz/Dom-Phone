import { Formik, Form} from 'formik';
import React from "react";
import * as Yup from 'yup';
import InputField from './Components/InputField';

function LoginForm(){
    return(
        <>
            <Formik
                initialValues={{email:"",password:""}}
                validationSchema={ Yup.object({
                    email: Yup.string()
                        .max(15, 'Логин должен быть меньше 15 символов!')
                        .required("Поле логин необходимо заполнить!"),
                    password: Yup.string()
                        .required("Поле пароль необходимо заполнить!")
                })}
                onSubmit={() => alert("!!!!")}
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
                        type="password"
                        name="password" 
                        placeholder="Пароль"
                    />
                    <label className="auth-label">
                        <input 
                            type="checkbox"
                            className='auth-checkbox'
                        />
                        Чужой компьютер
                    </label>
                    <button className="auth-btn" type="submit">LogIn</button>
                </Form>
            </Formik>
        </>
    )
        
        // <div className='row justify-content-center'> 
        //     <div className='col-10 col-lg-5'>
        //         <Formik
        //             initialValues={{ email: '', password: '' }}
        //             validationSchema={Yup.object({
        //                 email: Yup.string()
        //                     .max(15, 'Must be 15 characters or less')
        //                     .required('Required'),
        //             })}
        //             onSubmit={(values)=>{
        //                 alert()
        //             }}
        //         >
        //             <Form className='auth-form'>
        //                 <div className='title'>Welcome!</div>
        //                 <div className='form-holder'>
        //                 <InputField
        //                     inputClass="auth-input" 
        //                     errorClass=""
        //                     type="email"
        //                     name="email" 
        //                     placeholder="Логин"
        //                 />
        //                 <InputField
        //                     inputClass="auth-input" 
        //                     errorClass=""
        //                     type="password"
        //                     name="password" 
        //                     placeholder="Пароль"
        //                 />
        //                 <Field 
        //                     className="auth-input"  
        //                     type="password" 
        //                     name="password" 
        //                     placeholder="Пароль"/>
        //                 <ErrorMessage 
        //                     name="password"
        //                     component="div" />
        //                 </div>
        //                 <button className='auth-button' type="submit">LogIn</button>
        //             </Form>
        //         </Formik>
        //     </div>
        // </div>
}

export default LoginForm;