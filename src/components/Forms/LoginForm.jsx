import { Formik, Form} from 'formik';
import React from "react";
import * as Yup from 'yup';
import InputField from './Components/InputField';
import axios from 'axios';

function LoginForm({setActive,setRegisterActive}){
    const serverUrl = "https://localhost:7279/"

    const LoginSchema = Yup.object({
        login: Yup.string()
            .required("Поле логин необходимо заполнить!"),
        password: Yup.string()
            .required("Поле пароль необходимо заполнить!")
    });

    const handleSubmit = (values) => {
        axios({
            method: "post",
            url: serverUrl + "Account/Login",
            data:{
                login: values.login,
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
        <div className="fixed-overlay">
          <div className="modal-window">
            <div className="modal-container">
                <button className='modal-btn-cls' onClick={() => setActive(false)}>X</button>
                <div className="">
                    <Formik
                        initialValues={{login:"",password:""}}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                        >
                        <Form className="auth-form">
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
                                type="password"
                                name="password" 
                                placeholder="Пароль"
                            />
                            <label className="auth-label">
                                <a onClick={setRegisterActive}>
                                    Зарегистрироваться
                                </a>
                            </label>
                            <button className="auth-btn" type="submit">LogIn</button>
                        </Form>
                    </Formik>
                </div>
              </div>
          </div>
        </div>

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