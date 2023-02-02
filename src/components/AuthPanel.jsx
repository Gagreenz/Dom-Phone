import React from "react";
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";

function AuthPanel(){
    const [IsLoginActive,setLoginActive] = React.useState(false);
    const [IsRegisterActive,setRegisterActive] = React.useState(false);

    const SwitchForm = () => {
        setLoginActive(!IsLoginActive)
        setRegisterActive(!IsRegisterActive);
    }

    return(
        <div>
            <a onClick={() =>setLoginActive(!IsLoginActive)} href='#'>
                Войти
            </a>
            {IsLoginActive && <LoginForm setActive={setLoginActive} setRegisterActive={SwitchForm}/>}
            {/* <span>
                &nbsp;|&nbsp;
            </span>
            <a onClick={() =>setRegisterActive(!IsRegisterActive)} href='#'>
                Регистрация
            </a> */}
            {IsRegisterActive && <RegisterForm setActive={setRegisterActive} setLoginActive={SwitchForm}/>}
        </div>
    )

}

export default AuthPanel;